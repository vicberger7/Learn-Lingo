import { useEffect, useState } from "react";
import { ButtonLoadMore } from "components/ButtonLoadMore/ButtonLoadMore";
import { ListTeachers } from "components/ListTeachers/ListTeachers";
import { ButtonTop, StyledMain, StyledSection, Text } from "./Teachers.styled";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowUp } from "react-icons/io";
import {
  //  selectFilters,
  selectVisibleTeachers,
} from "../../redux/teachers/selectors";
import { Loader } from "components/Loader/Loader";
import { Filters } from "components/Filters/Filters";
import { fetchTeachers } from "../../redux/teachers/teachersOps";

export default function Teachers() {
  const dataTeachers = useSelector(selectVisibleTeachers);
  //  const filters = useSelector(selectFilters);

  const dispatch = useDispatch();

  const [isLoadMore, setIsLoadMore] = useState(true);
  let currentLimit = 8;

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    dispatch(fetchTeachers({ startAt: 0, limit: 4 }));
  }, [dispatch]);

  return (
    <StyledMain>
      <Filters />
      <StyledSection>
        {!dataTeachers.length && (
          <Text>No teachers were found for your request</Text>
        )}
        {dataTeachers.length ? (
          <ListTeachers data={dataTeachers} />
        ) : (
          <Loader />
        )}
        {isLoadMore && (
          <ButtonLoadMore
            onClick={async () => {
              const res = await dispatch(
                fetchTeachers({ startAt: 0, limit: currentLimit })
              );
              if (res.payload.length !== currentLimit)
                return setIsLoadMore(false);

              currentLimit += 4;
            }}
          />
        )}
      </StyledSection>
      (
      <ButtonTop onClick={handleTop}>
        <IoIosArrowUp size="30px" />
      </ButtonTop>
      )
    </StyledMain>
  );
}
