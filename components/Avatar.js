const Avatar = ({ url, className }) => {
    return (
        <img
            loading="lazy"
            className={`cursor-pointer h-10 transition duration-150 transform hover:scale-110 rounded-full ${className}`}
            src={url}
            alt="profile pic"
        />
    )
}

export default Avatar
