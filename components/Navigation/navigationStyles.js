import styled from "styled-components";

const Menu = styled.menu`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  gap: 20px;
  font-weight: 700;
`;

const MenuItem = styled.li`
  color: ${({ $active }) =>
    $active ? "var(--primary-color)" : "var(--text-color)"};
`;

export default { Menu, MenuItem };
