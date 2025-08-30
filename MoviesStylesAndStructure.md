# Movies Page
The page that contains movie cards which a user can choose from.

## Main structures
- Header: h1
- Page discription: p
- Genre container: div / flex / gap
    - Genre container: div / flex / align center / justify center / padding / border 1px
- Cards container: div / grid / grid template column: repeat(minmax(100px, autofit)) / grid auto row: 250px
    - Card: div
        - image container/ div/ padding 0/ margin 0
            - image: img / width 100% / height 100%
        - movie name: p / bold / 1.5 rem
        - detail container: div / flex / justify space between
            - duration container: div / flex / align center 
                - duration icon: img / height 0.5 rem / width 0.5 rem 
                - duration text: p / size 0.5 rem
            - rating container: div / flex / align center
                - star icon: img / height 0.5 rem / width 0.5 rem
                -rating text number: p / size 0.5 rem