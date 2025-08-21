export interface ZefirkaVitePluginOptions {
    /**
     * Относительный путь, по которому расположены страницы админки
     * @default 'src/pages'
     */
    pages?: string

    /**
     * Путь, относительно которого будут сохранены сгенерированные типы
     * @default 'src/types/generated/router.d.ts'
     */
    dts?: string
}
