import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";

export const Navbar = () => {
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Button href="/" color="inherit">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cooking Aloud
          </Typography>
        </Button>
        <Button href="/" color="inherit">
          Home
        </Button>
        {isAuthenticated() ? (
          <div>
            <Button href="/login" color="inherit" onClick={() => signOut()}>
              Logout
            </Button>
            <Button href="/profile" color="inherit">
              Profile
            </Button>
          </div>
        ) : (
          <div>
            <Button href="/login" color="inherit">
              Login
            </Button>
            <Button href="/register" color="inherit">
              Register
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};
