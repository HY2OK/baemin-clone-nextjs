import React from 'react';

function TopNavigation() {
  return (
    <nav>
      <div className="flex flex-col w-full h-20 justify-center items-center border rounded-b-xl bg-teal-300/80">
        <div className="mt-4">주소</div>
        <div>Search bar</div>
      </div>
    </nav>
  );
}

export default TopNavigation;
