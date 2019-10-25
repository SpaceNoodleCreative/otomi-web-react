import * as React from 'react'
import * as css from './SignUp.scss'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import HelpIcon from '@material-ui/icons/Help'

const SignUpStep1 = () => {
  const [finished, setFinished] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault()
    setFinished(true)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box height="100%" display="flex" alignItems="center" textAlign="center">
        <Paper className={css.lift10vh}>
          <Box p={4}>
            <form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h4" component="h1">
                    Sign up
                  </Typography>
                </Grid>
                {!finished && (
                  <React.Fragment>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" fullWidth variant="contained" color="primary" onClick={handleClick}>
                        Next
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Link href="/log-in">Already have an account? Log in</Link>
                    </Grid>
                  </React.Fragment>
                )}
                {finished && (
                  <React.Fragment>
                    <Grid item xs={12}>
                      <Typography component="p">
                        We've sent an email with a confirmation link to <strong>{email}</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Link>
                        <HelpIcon fontSize="small" className={css.iconInLink} />
                        Need help?
                      </Link>
                    </Grid>
                  </React.Fragment>
                )}
              </Grid>
            </form>
          </Box>
        </Paper>
      </Box>
    </Container>
  )
}

export default SignUpStep1
