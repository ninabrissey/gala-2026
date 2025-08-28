import fs from 'fs';
import path from 'path';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

// This page is a Server Component, so we can read files directly
const RulesPage = () => {
  const markdown = fs.readFileSync(
    path.join(process.cwd(), 'rules.md'),
    'utf8'
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Project Rules & Guidelines
      </Typography>
      <Paper sx={{ p: 2, mt: 2 }}>
        <Typography component="pre" sx={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
          {markdown}
        </Typography>
      </Paper>
    </Container>
  );
};

export default RulesPage;
