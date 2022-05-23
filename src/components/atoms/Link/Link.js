import LinkLib from 'next/link'
import { styled } from '@mui/material/styles'

const CustomLink = styled('a')({
  textDecoration: 'none',
  color: "#fff",
})

function Link({ href, name }) {
  return (
    <LinkLib href={href} passHref>
      <CustomLink>{name}</CustomLink>
    </LinkLib>
  )
}

export default Link