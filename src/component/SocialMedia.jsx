// export default function SocialMedia() {
//   return (
//     <>
//       <div className="social-media">
//         <img src="/images/facebook.png" alt="" />
//         <img src="/images/twitter.png" alt="" />
//         <img src="/images/linkin.png" alt="" />
//         <img src="/images/insta.png" alt="" />
//       </div>
//     </>
//   );
// }

export default function SocialMedia() {
  return (
    <div className="social-media">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="/images/facebook.png" alt="Facebook" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="/images/twitter.png" alt="Twitter" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="/images/linkin.png" alt="LinkedIn" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/images/insta.png" alt="Instagram" />
      </a>
    </div>
  );
}
