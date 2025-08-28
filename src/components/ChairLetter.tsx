import { Box, Stack, Typography } from "@mui/material"
import Image from 'next/image'

export const ChairLetter = () => {
  return (
    <Box sx={{ color: 'white',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
      background: 'linear-gradient(225deg, #1A1A1A 0%, #444444 50%, #1A1A1A 100%)',
      transition: 'transform 0.3s, box-shadow 0.3s', borderRadius: '30px',
      padding: '35px', 
      textAlign: 'left'}}>
      <p style={{marginTop: '0px'}}>
        Chairing this year’s SAFE Gala is an honor of a lifetime and a
        continuation of our steadfast support for SAFE. The 2026 gala theme is
        “Gallery of Hope,” meant to celebrate the art created within each
        survivor’s journey of hope and healing. Every survivor’s story is a
        beautiful work of art, a masterpiece, serving as inspiration for all of
        us.
      </p>
      <p>
        To our friends and fellow supporters of SAFE, we are truly grateful for
        your continued support of such an empowering, meaningful organization in
        our community—one that is near and dear to our hearts. Nelia first
        joined SAFE as a legal advocate volunteer before joining the staff as an
        employee. Over 25 years, she has continued to champion SAFE’s mission,
        most recently serving six years on the SAFE Alliance Board of Directors,
        including three years as Board Chair. Karly has served as a dedicated
        volunteer to SAFE’s programs for many years and joined the SAFE Alliance
        Board of Directors two years ago. She also serves on the SAFE Affordable
        Housing Corporation, the Building Committee, and the Development
        Committee. Our collective years of experience reflect a history of
        service and dedication to SAFE.
      </p>
      <p>
        As Chairs, we understand the importance of SAFE’s annual gala and the
        importance of fundraising at this event. SAFE relies upon philanthropic
        giving to continue providing critical, essential services to survivors
        in our community:
      </p>
      <p>
        · Housing is violence prevention. SAFE houses nearly 1,000 people each
        night in our temporary and permanent supportive housing facilities, with
        two new permanent supportive housing apartment complexes under
        construction right now to open at the end of 2026.
      </p>
      <Box ml={4}>
        <p>
        &#x2022; Forensic exams, medical care and advocate services for survivors of
        sexual abuse. 
        </p>

        <p>
        &#x2022; Foster and adoption services, helping families foster
        children in need and assisting with the adoption process. 
        </p>

        <p>
        &#x2022; Counseling,
        case management, and drop-in services for survivors who have been
        sexually exploited and trafficked. 
        </p>
        
        <p>
        &#x2022; School-based support groups,
        counseling, and youth leadership development to promote healthy
        relationships and prevent violence and abuse among children and teens.
        </p>  
      </Box>
      <p>
        These services ensure that survivors receive the help they need, at the
        most critical moments in their lives. We have seen firsthand the way
        that the staff at SAFE help survivors heal and create new, beautiful
        lives for themselves.
      </p>
      <p>
        We welcome you to join us at this year’s Gallery of Hope gala to
        celebrate the artwork and beauty of each survivor’s journey to safety
        and community. We look forward to seeing you at this important event and
        ask that you support SAFE’s mission to continue these lifesaving
        services.
      </p>
      <Stack direction={'row'} spacing={4} alignItems={'center'}>
        <Box>
          <p>With sincere gratitude,</p>
          <p style={{ margin: 0 }}>Nelia Robbi, Co-Chair</p>
          <p style={{ margin: 0}}>Of Counsel, McGinnis Lochridge</p>
          <p>and</p>
          <p style={{ margin: 0, marginTop: '10px' }}>Karly Houchin, Co-Chair</p>
          <p style={{ margin: 0 }}>Partner, Allensworth</p>
        </Box>
        <Box sx={{mt: 2}}>
          <Image src="/imageedit_4_5480396383.png" alt="Nelia Robbi" width={160} height={180} style={{marginRight: '20px', marginBottom: '10px'}} />
          <Image src="/imageedit_15_4866972827.png" alt="Karly Houchin" width={145} height={185} style={{marginBottom: '10px'}} />
        </Box>
      </Stack>
    </Box>
  )
}
