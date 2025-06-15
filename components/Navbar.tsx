import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: "grey.800" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/" className="logo">
          Sleep Tracker
        </Link>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <SignedIn>
            <Button component={Link} href="/" className="gradient-navbar">
              Dashboard
            </Button>

            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="contained" className="btn-primary">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
