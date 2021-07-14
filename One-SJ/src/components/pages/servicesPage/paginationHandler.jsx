import { useContext } from "react";
import { LanguageContext } from "../../utilities/languageContext";
import { TranslationsContext } from "../../utilities/translationsContext";
import { previous, next } from "../../utilities/texts";
import Pagination from "react-bootstrap/Pagination";
import _ from "lodash";

// Function used to determine what data to display corresponding to the current page.
// Sourced from Coding With Mosh
export function paginate(items, currentPage, pageSize) {
  const startIndex = (currentPage - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}

// SFC for rendering the pagination bar
const PaginationHandler = ({
  itemCount,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let previousDisplay = previous;
  let nextDisplay = next;

  // Grab from saved translations if not English
  if (currentLanguage !== "en") {
    previousDisplay = savedTranslations[previous + "-" + currentLanguage];
    nextDisplay = savedTranslations[next + "-" + currentLanguage];
  }

  // Logic section of code

  // Don't render if there are no items being displayed
  if (itemCount === 0) return null;

  // Calculate the amount of pages
  const pageCount = Math.ceil(itemCount / pageSize);

  // Don't render if there is only one page
  if (pageCount === 1) return null;

  // Create an array from 1 - pageCount
  const pages = _.range(1, pageCount + 1);

  return (
    <Pagination
      className="boxShadow"
      style={{
        margin: "5rem 0",
      }}
    >
      <Pagination.Prev
        onClick={() =>
          onPageChange(currentPage - 1 < 1 ? currentPage : currentPage - 1)
        }
      >
        {previousDisplay}
      </Pagination.Prev>
      {/* Create a button for each possible page */}
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={page === currentPage ? true : false}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() =>
          onPageChange(
            currentPage + 1 > pageCount ? currentPage : currentPage + 1
          )
        }
      >
        {nextDisplay}
      </Pagination.Next>
    </Pagination>
  );
};

export default PaginationHandler;
