import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/5PVXkqt2s9k",
    name: `Tom${val}`,
    email: "test@aaaa.com",
    phone: "111-2222-3344",
    company: {
      name: "XXX YYY Co., Ltd."
    },
    website: "abcdefgaaa.com"
  };
});

export const Users = () => {
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;
  return (
    <SContainer>
      <h2>Users List!</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => {
          return <UserCard key={user.id} user={user} isAdmin={isAdmin} />;
        })}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
