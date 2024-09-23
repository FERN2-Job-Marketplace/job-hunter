import Link from "next/link";

export default function Footer(){
    return(
        <>
            <footer className="footer footer-center bg-raisin-black text-white p-10 border-t border-solid border-slate-grey">
                <aside>
                    <Link href={"/"} className="btn btn-ghost text-xl">
                        <svg className="max-w-full" width="166" height="36" viewBox="0 0 166 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.8337 4.41663C12.7728 4.41663 11.7554 4.83805 11.0052 5.5882C10.2551 6.33834 9.83366 7.35576 9.83366 8.41663V9.74996H7.16699C6.10613 9.74996 5.08871 10.1714 4.33857 10.9215C3.58842 11.6717 3.16699 12.6891 3.16699 13.75V16.926L5.09633 17.89L5.10299 17.894L5.13899 17.9113L5.29899 17.986C5.44388 18.0544 5.65988 18.1486 5.94699 18.2686C6.51899 18.5046 7.35499 18.8233 8.39233 19.142C10.475 19.782 13.3403 20.4166 16.5003 20.4166C19.663 20.4166 22.527 19.7833 24.607 19.142C25.647 18.822 26.4817 18.5046 27.0537 18.2686C27.3258 18.1559 27.5952 18.0368 27.8617 17.9113L27.8977 17.894L27.9043 17.8913L29.8337 16.9246V13.75C29.8337 12.6891 29.4122 11.6717 28.6621 10.9215C27.9119 10.1714 26.8945 9.74996 25.8337 9.74996H23.167V8.41663C23.167 7.35576 22.7456 6.33834 21.9954 5.5882C21.2453 4.83805 20.2279 4.41663 19.167 4.41663H13.8337ZM20.5003 9.74996V8.41663C20.5003 8.063 20.3598 7.72387 20.1098 7.47382C19.8598 7.22377 19.5206 7.08329 19.167 7.08329H13.8337C13.48 7.08329 13.1409 7.22377 12.8908 7.47382C12.6408 7.72387 12.5003 8.063 12.5003 8.41663V9.74996H20.5003ZM29.0963 20.2753L29.8337 19.9073V27.0833C29.8337 28.1442 29.4122 29.1616 28.6621 29.9117C27.9119 30.6619 26.8945 31.0833 25.8337 31.0833H7.16699C6.10613 31.0833 5.08871 30.6619 4.33857 29.9117C3.58842 29.1616 3.16699 28.1442 3.16699 27.0833V19.9073L3.90433 20.2753L3.90699 20.278L3.91233 20.2806L3.92966 20.2886L3.98433 20.3153L4.18566 20.4086C4.35899 20.4886 4.60966 20.6006 4.92833 20.7313C5.56566 20.9953 6.47899 21.3446 7.60833 21.6913C9.85899 22.3846 12.9937 23.0833 16.5003 23.0833C20.0043 23.0833 23.1403 22.3833 25.3937 21.6913C26.3014 21.413 27.1957 21.0926 28.0737 20.7313C28.3912 20.6002 28.7055 20.4615 29.0163 20.3153L29.071 20.2886L29.0883 20.2806L29.0937 20.278L29.0963 20.2753ZM16.5003 15.0833C16.1467 15.0833 15.8076 15.2238 15.5575 15.4738C15.3075 15.7239 15.167 16.063 15.167 16.4166C15.167 16.7702 15.3075 17.1094 15.5575 17.3594C15.8076 17.6095 16.1467 17.75 16.5003 17.75H16.5137C16.8673 17.75 17.2064 17.6095 17.4565 17.3594C17.7065 17.1094 17.847 16.7702 17.847 16.4166C17.847 16.063 17.7065 15.7239 17.4565 15.4738C17.2064 15.2238 16.8673 15.0833 16.5137 15.0833H16.5003Z" fill="white"/>
                            <path d="M48.7 27.24C47.02 27.24 45.596 26.816 44.428 25.968C43.26 25.12 42.42 23.904 41.908 22.32L45.124 21.096C45.476 22.12 45.94 22.872 46.516 23.352C47.108 23.832 47.836 24.072 48.7 24.072C49.74 24.072 50.572 23.736 51.196 23.064C51.836 22.392 52.156 21.496 52.156 20.376V10.2H55.636V20.472C55.636 21.832 55.348 23.024 54.772 24.048C54.196 25.056 53.388 25.84 52.348 26.4C51.308 26.96 50.092 27.24 48.7 27.24ZM64.027 27.24C62.779 27.24 61.651 26.952 60.643 26.376C59.635 25.8 58.835 25.024 58.243 24.048C57.651 23.072 57.355 21.976 57.355 20.76C57.355 19.544 57.643 18.448 58.219 17.472C58.811 16.48 59.611 15.696 60.619 15.12C61.643 14.544 62.779 14.256 64.027 14.256C65.275 14.256 66.403 14.544 67.411 15.12C68.435 15.696 69.235 16.48 69.811 17.472C70.403 18.448 70.699 19.544 70.699 20.76C70.699 21.976 70.403 23.072 69.811 24.048C69.235 25.024 68.443 25.8 67.435 26.376C66.427 26.952 65.291 27.24 64.027 27.24ZM64.027 24.384C64.683 24.384 65.267 24.224 65.779 23.904C66.307 23.584 66.723 23.152 67.027 22.608C67.347 22.048 67.507 21.432 67.507 20.76C67.507 20.072 67.347 19.456 67.027 18.912C66.723 18.368 66.307 17.936 65.779 17.616C65.267 17.28 64.683 17.112 64.027 17.112C63.387 17.112 62.803 17.28 62.275 17.616C61.747 17.936 61.331 18.368 61.027 18.912C60.723 19.456 60.571 20.072 60.571 20.76C60.571 21.432 60.723 22.048 61.027 22.608C61.331 23.152 61.747 23.584 62.275 23.904C62.803 24.224 63.387 24.384 64.027 24.384ZM72.4801 27V10.2L75.7681 9.648V15.504C76.7601 14.72 77.9281 14.328 79.2721 14.328C80.4561 14.328 81.5281 14.616 82.4881 15.192C83.4481 15.768 84.2081 16.544 84.7681 17.52C85.3441 18.48 85.6321 19.56 85.6321 20.76C85.6321 21.96 85.3441 23.048 84.7681 24.024C84.1921 24.984 83.4161 25.752 82.4401 26.328C81.4641 26.888 80.3761 27.168 79.1761 27.168C78.5521 27.168 77.9441 27.08 77.3521 26.904C76.7601 26.728 76.2161 26.472 75.7201 26.136V27H72.4801ZM78.7441 24.384C79.4321 24.384 80.0481 24.224 80.5921 23.904C81.1521 23.584 81.5921 23.152 81.9121 22.608C82.2321 22.064 82.3921 21.448 82.3921 20.76C82.3921 20.072 82.2321 19.456 81.9121 18.912C81.5921 18.352 81.1521 17.92 80.5921 17.616C80.0481 17.296 79.4321 17.136 78.7441 17.136C78.1361 17.136 77.5761 17.24 77.0641 17.448C76.5681 17.64 76.1361 17.936 75.7681 18.336V23.208C76.1201 23.576 76.5521 23.864 77.0641 24.072C77.5921 24.28 78.1521 24.384 78.7441 24.384ZM87.5967 27V10.2H91.0767V16.968H98.8047V10.2H102.285V27H98.8047V20.112H91.0767V27H87.5967ZM109.731 27.24C108.771 27.24 107.915 27.032 107.163 26.616C106.427 26.184 105.843 25.592 105.411 24.84C104.995 24.088 104.787 23.224 104.787 22.248V14.496H108.075V21.768C108.075 22.568 108.307 23.208 108.771 23.688C109.251 24.168 109.891 24.408 110.691 24.408C111.235 24.408 111.723 24.304 112.155 24.096C112.603 23.872 112.971 23.56 113.259 23.16V14.496H116.547V27H113.259V25.992C112.299 26.824 111.123 27.24 109.731 27.24ZM118.869 27V14.496H122.157V15.528C123.101 14.68 124.269 14.256 125.661 14.256C126.637 14.256 127.493 14.472 128.229 14.904C128.981 15.32 129.565 15.904 129.981 16.656C130.397 17.392 130.605 18.256 130.605 19.248V27H127.317V19.728C127.317 18.912 127.085 18.272 126.621 17.808C126.157 17.328 125.525 17.088 124.725 17.088C124.165 17.088 123.669 17.2 123.237 17.424C122.805 17.632 122.445 17.936 122.157 18.336V27H118.869ZM138.432 27.192C137.04 27.192 135.984 26.88 135.264 26.256C134.56 25.616 134.208 24.688 134.208 23.472V17.232H131.64V14.496H134.208V11.304L137.496 10.56V14.496H141.072V17.232H137.496V22.8C137.496 23.376 137.624 23.792 137.88 24.048C138.136 24.288 138.584 24.408 139.224 24.408C139.544 24.408 139.832 24.392 140.088 24.36C140.36 24.312 140.656 24.232 140.976 24.12V26.832C140.64 26.944 140.216 27.032 139.704 27.096C139.208 27.16 138.784 27.192 138.432 27.192ZM148.416 27.24C147.168 27.24 146.032 26.952 145.008 26.376C144 25.8 143.2 25.024 142.608 24.048C142.016 23.072 141.72 21.976 141.72 20.76C141.72 19.544 142 18.448 142.56 17.472C143.136 16.496 143.912 15.72 144.888 15.144C145.864 14.568 146.952 14.28 148.152 14.28C149.352 14.28 150.416 14.576 151.344 15.168C152.272 15.76 153 16.56 153.528 17.568C154.072 18.576 154.344 19.72 154.344 21V21.864H145.08C145.224 22.36 145.456 22.808 145.776 23.208C146.112 23.608 146.52 23.92 147 24.144C147.496 24.368 148.024 24.48 148.584 24.48C149.144 24.48 149.656 24.392 150.12 24.216C150.6 24.04 151.008 23.792 151.344 23.472L153.504 25.44C152.736 26.064 151.944 26.52 151.128 26.808C150.328 27.096 149.424 27.24 148.416 27.24ZM145.032 19.512H151.104C150.992 19.016 150.784 18.584 150.48 18.216C150.192 17.832 149.84 17.536 149.424 17.328C149.024 17.104 148.576 16.992 148.08 16.992C147.568 16.992 147.104 17.096 146.688 17.304C146.272 17.512 145.92 17.808 145.632 18.192C145.36 18.56 145.16 19 145.032 19.512ZM156.118 27V14.496H159.406V15.888C159.806 15.344 160.286 14.928 160.846 14.64C161.406 14.352 162.038 14.208 162.742 14.208C163.35 14.224 163.806 14.32 164.11 14.496V17.376C163.87 17.264 163.606 17.184 163.318 17.136C163.03 17.072 162.734 17.04 162.43 17.04C161.79 17.04 161.206 17.2 160.678 17.52C160.15 17.84 159.726 18.296 159.406 18.888V27H156.118Z" fill="white"/>
                        </svg>
                    </Link>
                    <p className="font-bold">
                        JobHunter Ltd.
                    <br />
                        Providing reliable job portal 1992
                    </p>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                    <a>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path
                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>
                    <a>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path
                            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                    <a>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path
                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                    </div>
                </nav>
            </footer>
        </>
    )
}