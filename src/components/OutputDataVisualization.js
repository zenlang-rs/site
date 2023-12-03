import { useState } from 'react';

const OutputDataVisualization = ({ data }) => {
  const [expandedErrorIndex, setExpandedErrorIndex] = useState(null);

  const toggleError = (index) => {
    setExpandedErrorIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <section className="mx-auto bg-white p-4 shadow-lg shadow-gray-300 min-h-[10rem] rounded-md">
      {/* Loop through the data and display rows with green, red, or error background colors */}
      {data && data !== "" && JSON.parse(data).map((item, index) => (
        <div
          key={index}
          className={`flex flex-col mb-2 ${
            item.Ok ? 'bg-green-200' : item.Err ? 'bg-red-200' : 'bg-orange-200'
          } p-2 py-3 my-4 rounded`}
        >
          <div className="flex items-center">
            <div className="mr-2">
              {item.Ok ? (
                <svg
                  className="text-green-500 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : item.Err ? (
                <svg
                  className="text-red-500 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="text-gray-500 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </div>
            <span className={`text-${item.Ok ? 'green' : 'red'}-500`}>
              {item.Ok
                ? 'Test Case Passed'
                : item.Err
                ? 'Error Compiling the Code'
                : 'Test Case Failed'}
            </span>
            {item.Err && (
              <button
                className="ml-auto text-blue-500"
                onClick={() => toggleError(index)}
              >
                {expandedErrorIndex === index ? 'Hide Error' : 'Show Error'}
              </button>
            )}
          </div>
          {expandedErrorIndex === index && item.Err && (
            <div className="mt-2 p-2 bg-red-100 rounded">
              <p className="text-red-500 whitespace-pre-line">{item.Err}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default OutputDataVisualization;
