import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Container,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import data from "../../public/assets/course_catalog.json";

// interface Course {
//   id: number;
//   imageName: string;
//   imageSrc: string;
//   courseHeading: string;
//   courseDescription: string;
//   formattedCoursePrice: string;
// }

// interface Courses {
//   courses: Course[];
// }

const CourseCardList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  function handleLeftSingleArrowClick() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleRightSingleArrowClick() {
    if (currentPage < npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage - 1;
  const firstIndex = lastIndex - recordsPerPage + 1;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  console.log(records + " " + numbers);
  console.log(data);
  console.log("Current Page: " + currentPage);
  console.log("Last Index: " + lastIndex); // 8
  console.log("First Index: " + firstIndex); // 0

  return (
    <>
      <Container maxWidth="container.xl">
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        >
          {data.map((course) => (
            <Card maxW="xs" key={course.id}>
              <CardBody>
                <Image
                  src={course.imageSrc}
                  alt={course.imageName}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{course.courseHeading}</Heading>
                  <Text>{course.courseDescription}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    {course.formattedCoursePrice}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
        <SimpleGrid columns={5} spacing={1} p={2} alignContent="center">
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="purple"
            aria-label="Done"
            fontSize="20px"
            width="20px"
            icon={<FaAngleDoubleLeft />}
            onClick={() => setCurrentPage(1)}
          />
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="purple"
            aria-label="Done"
            fontSize="20px"
            width="20px"
            icon={<FaAngleLeft />}
            onClick={handleLeftSingleArrowClick}
          />
          <text>
            {currentPage} / {npage}
          </text>
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="purple"
            aria-label="Done"
            fontSize="20px"
            width="20px"
            icon={<FaAngleRight />}
            onClick={handleRightSingleArrowClick}
          />
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="purple"
            aria-label="Done"
            fontSize="20px"
            width="20px"
            icon={<FaAngleDoubleRight />}
            onClick={() => setCurrentPage(npage)}
          />
        </SimpleGrid>
      </Container>
      <IconButton
        isRound={true}
        variant="solid"
        colorScheme="white"
        aria-label="Done"
        fontSize="20px"
        width="20px"
        icon={<FaAngleDoubleRight />}
        onClick={() => setCurrentPage(1)}
      />
    </>
  );
};

export default CourseCardList;
