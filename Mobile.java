private ActivityLoginBinding binding;
   
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityLoginBinding.inflate(getLayoutInflater()); //View Binding inflater
        setContentView(binding.getRoot()); //Layout View
        
        
        binding.loginButton.setOnClickListener(v -> {
            // Retrieve and trim username input
            String username = binding.loginEnterUsername.getText().toString().trim();

            // Validate username length
            if (username.isEmpty() || username.length() < 3) {
                // Show error message if username is too short
                Toast.makeText(this, "@string/loginWarning", Toast.LENGTH_SHORT).show();
                return;
            }

            // Special handling for admin user
            if ("admin".equals(username)) {
                // Navigate to Scoreboard activity
                Intent intent = new Intent(this, ScoreboardActivity.class);
                startActivity(intent);
            } else {
                // Navigate to Dashboard activity for regular users
                Intent intent = new Intent(this, DashboardActivity.class);
                intent.putExtra("USERNAME", username);
                startActivity(intent);
            }
        });
    }

   
        binding.loginInfo.setOnClickListener(v -> {
    
                new AlertDialog.Builder(this)
                    .setTitle("Information")
                    .setMessage("Hello World")
                    .setPositiveButton("OK", (dialog, which) -> dialog.dismiss())
                    .show();
        });

    