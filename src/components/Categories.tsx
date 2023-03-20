import styles from '../styles/components/Categories.module.sass'

function Categories() {
  return (
    <aside className={ styles.aside }>
      <ul>
        <li>
          <a href="#">Categoria 1</a>
        </li>
      </ul>
    </aside>
  )
}

export default Categories