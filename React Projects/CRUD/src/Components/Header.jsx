

function Header() {
  return (
    <div className="p-2" 
    style={{
        backgroundColor:"var(--indigo-700)",
        color:"var(--primary-color-text)",
        borderRadius:"var(--border-radius)",
        padding:"3rem"
    }}
    >
        <h3>CRUD Application</h3>
    </div>
  )
}

export default Header