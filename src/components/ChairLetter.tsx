import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'

export const ChairLetter = () => {
  return (
    <Box
      sx={{
        color: 'white',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
        background: 'linear-gradient(225deg, #1A1A1A 0%, #444444 50%, #1A1A1A 100%)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        borderRadius: '30px',
        padding: '35px',
        textAlign: 'left',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        '& p': {
          fontSize: '1.1rem',
          lineHeight: 1.8,
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: '1.5rem',
          fontWeight: 300,
          '&:last-child': {
            marginBottom: 0,
          },
          '& strong': {
            color: 'white',
            fontWeight: 600,
          },
        },
      }}
    >
      <p style={{ marginTop: '0px' }}>
        Chairing this year's SAFE Gala is an honor of a lifetime and a
        continuation of our steadfast support for SAFE. The 2026 gala theme is
        "Gallery of Hope," meant to celebrate the art created within each
        survivor's journey of hope and healing. Every survivor's story is a
        beautiful work of art, a masterpiece, serving as inspiration for all of
        us.
      </p>
      <p>
        To our friends and fellow supporters of SAFE, we are truly grateful for
        your continued support of such an empowering, meaningful organization in
        our community—one that is near and dear to our hearts. Nelia first
        joined SAFE as a legal advocate volunteer before joining the staff as an
        employee. Over 25 years, she has continued to champion SAFE's mission,
        most recently serving six years on the SAFE Alliance Board of Directors,
        including three years as Board Chair. Karly has served as a dedicated
        volunteer to SAFE's programs for many years and joined the SAFE Alliance
        Board of Directors two years ago. She also serves on the SAFE Affordable
        Housing Corporation, the Building Committee, and the Development
        Committee. Our collective years of experience reflect a history of
        service and dedication to SAFE.
      </p>
      <p>
        As Chairs, we understand the importance of SAFE's annual gala and the
        importance of fundraising at this event. SAFE relies upon philanthropic
        giving to continue providing critical, essential services to survivors
        in our community:
      </p>
      <p>
        • Housing is violence prevention. SAFE houses nearly 1,000 people each
        night in our temporary and permanent supportive housing facilities, with
        two new permanent supportive housing apartment complexes under
        construction right now to open at the end of 2026.
      </p>
      <Box ml={4}>
        <p>
          • Forensic exams, medical care and advocate services for survivors of
          sexual abuse.
        </p>
        <p>
          • Foster and adoption services, helping families foster children in need
          and assisting with the adoption process.
        </p>
        <p>
          • Counseling, case management, and drop-in services for survivors who
          have been sexually exploited and trafficked.
        </p>
        <p>
          • School-based support groups, counseling, and youth leadership
          development to promote healthy relationships and prevent violence and
          abuse among children and teens.
        </p>
      </Box>
      <p>
        These services ensure that survivors receive the help they need, at the
        most critical moments in their lives. We have seen firsthand the way
        that the staff at SAFE help survivors heal and create new, beautiful
        lives for themselves.
      </p>
      <p>
        We welcome you to join us at this year's Gallery of Hope gala to
        celebrate the artwork and beauty of each survivor's journey to safety
        and community. We look forward to seeing you at this important event and
        ask that you support SAFE's mission to continue these lifesaving
        services.
      </p>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        alignItems={{ xs: 'flex-start', md: 'center' }}
        sx={{ mt: 4 }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: '1.8rem',
              fontWeight: 600,
              mb: 2,
              backgroundImage: 'linear-gradient(to right, #6EE7B7, #3B82F6, #9333EA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            With sincere gratitude,
          </Typography>
          <Box sx={{ '& p': { mb: 0.5 } }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: '1.2rem',
                fontWeight: 500,
                color: 'white',
              }}
            >
              Nelia Robbi, Co-Chair
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.8)',
                mb: 2,
              }}
            >
              Of Counsel, McGinnis Lochridge
            </Typography>
            
            <Typography
              variant="h4"
              sx={{
                fontSize: '1.2rem',
                fontWeight: 500,
                color: 'white',
                mt: 3,
              }}
            >
              Karly Houchin, Co-Chair
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              Partner, Allensworth
            </Typography>
          </Box>
        </Box>
        
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            justifyContent: { xs: 'center', md: 'flex-end' },
            width: { xs: '100%', md: 'auto' },
            mt: { xs: 3, md: 0 },
          }}
        >
          <Image
            src="/imageedit_4_5480396383.png"
            alt="Nelia Robbi"
            width={160}
            height={180}
            style={{
              borderRadius: '12px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            }}
          />
          <Image
            src="/imageedit_15_4866972827.png"
            alt="Karly Houchin"
            width={145}
            height={185}
            style={{
              borderRadius: '12px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            }}
          />
        </Box>
      </Stack>
    </Box>
  )
}
