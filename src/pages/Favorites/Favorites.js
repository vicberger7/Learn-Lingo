import { ListTeachers } from "components/ListTeachers/ListTeachers";
import { StyledMain } from "pages/Teachers/Teachers.styled";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import { FavoriteTitle, StyledSection, Picture } from "./Favorites.styled";
import teacher from "../../assets/img/englishTeacher.jpeg";

export default function Favorites() {
  const dataFavorites = useSelector(selectFavorites);

  return (
    <StyledMain>
      <StyledSection>
        {!dataFavorites.length ? (
          <>
          <FavoriteTitle>
            It seems that your favorite list is currently empty. To add teachers
            to your favorites, please visit the catalog where you can find a
            list of teachers. From there, you can select the teachers you like  and add them to your favorites by
            clicking on the like ( heart ) button. Once you've added them to your
            favorites, you'll be able to view them here.
          </FavoriteTitle>
         <Picture src={teacher} alt="English teacher"/>
          </>
        ) : (
          <ListTeachers data={dataFavorites} />
        )}
      </StyledSection>
    </StyledMain>
  );
}
