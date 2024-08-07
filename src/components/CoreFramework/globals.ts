import { createGlobalStyle, DefaultTheme, ThemeProps } from "styled-components";

declare interface MyTheme extends DefaultTheme {
  body: string;
  text: string;
  navbarHoverBorders: string;
  cardBackground: string;
  themeButtonBackground: string;
  themeButtonText: string;
}

declare interface MyThemeProps extends ThemeProps<DefaultTheme> {
  theme: MyTheme;
}

const GlobalStyles = createGlobalStyle`
body {
    align-items: center;
    background: ${(props: MyThemeProps) => props.theme.body};
    color: ${(props: MyThemeProps) => props.theme.text};
    min-height: 100vh;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
}


.navbar-item.has-dropdown.is-active .navbar-link, .navbar-item.has-dropdown:focus .navbar-link, .navbar-item.has-dropdown:hover .navbar-link {
    background: ${(props: MyThemeProps) => props.theme.body};
    color: ${(props: MyThemeProps) => props.theme.text};
}

h1.title, .subtitle, .navbar-dropdown {
    background: ${(props: MyThemeProps) => props.theme.body};
    color: ${(props: MyThemeProps) => props.theme.text};
}

.navbar-link.is-active, .navbar-link:focus, .navbar-link:focus-within, .navbar-link:hover, a.navbar-item.is-active, a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover {
    background: ${(props: MyThemeProps) => props.theme.body};
    color: ${(props: MyThemeProps) => props.theme.text};
}

.card {
    background: ${(props: MyThemeProps) => props.theme.cardBackground};
}

.card-content > .title {
    color: ${(props: MyThemeProps) => props.theme.text};
}

@media screen and (max-width: 1024px){
    .navbar-menu {
        display: block;
        opacity: 0;
    
        position: absolute;   /* or float: left; width: 100%;*/
        left: 0;
        right: 0;
    
        transform: translateY(-50%);
        transition: all .4s ease-in-out;
        pointer-events: none;
        border-bottom: 2px solid ${(props: MyThemeProps) => props.theme.text};
    }
    
    .navbar-menu.is-active {
        opacity: 1;
        transform: none;
        pointer-events: auto;
    }
}


.navbar, .navbar-menu {
    background: ${(props: MyThemeProps) => props.theme.body};
    color: ${(props: MyThemeProps) => props.theme.text};
}

.navbar-burger {
    color: ${(props: MyThemeProps) => props.theme.text};
}

.navbar-item, .navbar-link {
    color: ${(props: MyThemeProps) => props.theme.text};
}
.navbar-link.is-active {
    color: ${(props: MyThemeProps) => props.theme.text};
}

.navbar .navbar-brand a:visited{
    color: ${(props: MyThemeProps) => props.theme.text};
}

#theme-toggle {
    background: ${(props: MyThemeProps) => props.theme.themeButtonBackground};
    color: ${(props: MyThemeProps) => props.theme.themeButtonText};
    transition: all 0.25s linear;

}

@media screen and (min-width: 1024px){
    .navbar-item:before, .navbar-item:after {
    position: absolute;
    opacity: 0;
    width: 0%;
    height: 2px;
    content: '';
    background: ${(props: MyThemeProps) => props.theme.navbarHoverBorders};
    transition: all 0.25s linear;
    }
}
`;

export default GlobalStyles;
