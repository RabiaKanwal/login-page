import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-design-bg font-inter">
      {/* Header */}
      <header className="flex items-center justify-between px-4 md:px-8 py-4">
        <div></div> {/* Empty space for left side */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <span className="text-lg md:text-xl font-normal text-black">
              English
            </span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              className="ml-1"
            >
              <path
                d="M5.00001 6.99999C4.70834 6.99999 4.41667 6.88749 4.19584 6.66665L1.47917 3.94999C1.35834 3.82915 1.35834 3.62915 1.47917 3.50832C1.60001 3.38749 1.80001 3.38749 1.92084 3.50832L4.63751 6.22499C4.83751 6.42499 5.16251 6.42499 5.36251 6.22499L8.07917 3.50832C8.20001 3.38749 8.40001 3.38749 8.52084 3.50832C8.64167 3.62915 8.64167 3.82915 8.52084 3.94999L5.80417 6.66665C5.58334 6.88749 5.29167 6.99999 5.00001 6.99999Z"
                fill="#292D32"
              />
            </svg>
          </div>

          {/* Sign in */}
          <span className="text-lg md:text-xl font-bold text-design-primary">
            Sign in
          </span>

          {/* Register Button */}
          <Button
            variant="outline"
            className="px-3 md:px-5 py-3 md:py-4 h-auto rounded-2xl border-neutral-border bg-white text-design-primary text-lg md:text-xl font-normal shadow-design hover:bg-gray-50"
          >
            Register
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row min-h-[calc(100vh-120px)] items-center justify-between px-4 md:px-8 py-8 lg:py-0 gap-8 lg:gap-0">
        {/* Left Side - Content */}
        <div className="flex-1 w-full lg:max-w-4xl order-2 lg:order-1">
          <div className="max-w-3xl text-center lg:text-left">
            {/* Title */}
            <h1 className="font-sarabun text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 lg:mb-8 leading-tight">
              Perkin Elmer
            </h1>

            {/* Description */}
            <p className="font-sarabun text-base md:text-lg text-black mb-4 lg:mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Just a random a UI kit I grabbed from figma for testing
            </p>

            {/* Join Now Link */}
            <a
              href="#"
              className="font-sarabun text-lg md:text-xl font-bold text-design-primary hover:underline"
            >
              Join Now!
            </a>

            {/* Illustration */}
            <div className="mt-6 lg:mt-8">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/2cd8fc41eb021b7d1977c22e41adb8ee1050470b?width=1116"
                alt="Illustration"
                className="w-full max-w-sm md:max-w-lg h-auto mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Sign In Form */}
        <div className="flex-shrink-0 w-full max-w-sm md:max-w-md order-1 lg:order-2">
          <div className="space-y-6 md:space-y-8">
            {/* Form Title */}
            <h2 className="font-inter text-xl md:text-2xl font-bold text-black text-center">
              Sign in
            </h2>

            {/* Form Fields */}
            <div className="space-y-4 md:space-y-6">
              {/* Email/Phone Input */}
              <div className="relative">
                <div className="bg-input-bg rounded-xl border border-neutral-border shadow-design">
                  <Input
                    type="text"
                    placeholder="Enter Email or Phone"
                    className="w-full h-12 md:h-14 px-4 bg-transparent border-0 text-sm font-medium text-text-secondary placeholder:text-text-secondary focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="relative">
                <div className="bg-input-bg rounded-xl border border-neutral-border shadow-design">
                  <Input
                    type="password"
                    placeholder="Password"
                    className="w-full h-12 md:h-14 px-4 pr-12 bg-transparent border-0 text-sm font-medium text-text-secondary placeholder:text-text-secondary focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <button className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2">
                    <Eye className="w-5 md:w-6 h-5 md:h-6 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <a href="#" className="text-sm text-text-muted hover:underline">
                  Recover Password ?
                </a>
              </div>

              {/* Sign In Button */}
              <Button className="w-full h-12 md:h-14 bg-design-primary hover:bg-blue-600 text-white font-kanit font-bold text-sm md:text-base rounded-xl shadow-design">
                Sign in
              </Button>

              {/* Divider */}
              <div className="flex items-center justify-center space-x-4">
                <div className="h-px bg-gray-300 flex-1"></div>
                <span className="text-sm text-text-muted px-4">
                  Or Continue with
                </span>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>

              {/* Social Login Buttons */}
              <div className="flex justify-center space-x-3 md:space-x-4">
                {/* Google */}
                <button className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl border border-neutral-border bg-white shadow-design flex items-center justify-center hover:bg-gray-50">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="md:w-6 md:h-6"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.04 12.2614C23.04 11.4459 22.9668 10.6618 22.8309 9.90909H12V14.3575H18.1891C17.9225 15.795 17.1123 17.013 15.8943 17.8284V20.7139H19.6109C21.7855 18.7118 23.04 15.7636 23.04 12.2614Z"
                      fill="#4285F4"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 23.4998C15.105 23.4998 17.7081 22.4701 19.6109 20.7137L15.8943 17.8282C14.8645 18.5182 13.5472 18.926 12 18.926C9.00474 18.926 6.46951 16.903 5.56519 14.1848H1.72302V17.1644C3.61539 20.9228 7.50451 23.4998 12 23.4998Z"
                      fill="#34A853"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.56523 14.1851C5.33523 13.4951 5.20455 12.758 5.20455 12.0001C5.20455 11.2421 5.33523 10.5051 5.56523 9.81506V6.83551H1.72318C0.944318 8.38801 0.5 10.1444 0.5 12.0001C0.5 13.8557 0.944318 15.6121 1.72318 17.1646L5.56523 14.1851Z"
                      fill="#FBBC05"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 5.07386C13.6883 5.07386 15.2043 5.65409 16.3961 6.79364L19.6945 3.49523C17.7029 1.63955 15.0997 0.5 12 0.5C7.50451 0.5 3.61539 3.07705 1.72302 6.83545L5.56519 9.815C6.46951 7.09682 9.00474 5.07386 12 5.07386Z"
                      fill="#EA4335"
                    />
                  </svg>
                </button>

                {/* Twitter */}
                <button className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl border border-neutral-border bg-white shadow-design flex items-center justify-center hover:bg-gray-50">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="md:w-6 md:h-6"
                  >
                    <path
                      d="M7.55016 21.75C16.6045 21.75 21.5583 14.2467 21.5583 7.74186C21.5583 7.53092 21.5536 7.3153 21.5442 7.10492C22.5079 6.40746 23.3395 5.54425 24 4.5553C23.1025 4.9546 22.1496 5.21538 21.1739 5.32874C22.2013 4.71795 22.9705 3.74637 23.3391 2.60538C22.3726 3.17716 21.3156 3.58288 20.2134 3.80461C19.4708 3.01226 18.489 2.48116 17.4197 2.28915C16.3504 2.09714 15.2532 2.25898 14.2977 2.75105C13.3423 3.24312 12.5818 4.03812 12.1338 5.00556C11.6859 5.97301 11.5754 7.05985 11.8195 8.09327C9.86249 7.99707 7.94794 7.5029 6.19998 6.64606C4.45203 5.78923 2.90969 4.58151 1.67297 3.09901C1.0444 4.15072 0.852057 5.40583 1.13503 6.60181C1.418 7.79779 2.15506 8.84669 3.19641 9.54318C2.41463 9.51855 1.64998 9.31341 0.965625 8.94466V9.00991C0.964925 10.1332 1.3581 11.2245 2.07831 12.1054C2.79852 12.9864 3.80132 13.6052 4.91625 13.8613C4.19206 14.0831 3.43198 14.1255 2.69484 14.0033C3.00945 15.0466 3.62157 15.9706 4.44577 16.6531C5.26997 17.3356 6.26512 17.7434 7.30234 17.7255C5.61885 19.0581 3.56045 19.7793 1.44375 19.7762C1.00855 19.7762 0.574748 19.7531 0.145312 19.7078C2.30271 21.1331 4.80632 21.8996 7.55016 21.8952"
                      fill="#1D9BF0"
                    />
                  </svg>
                </button>

                {/* Facebook */}
                <button className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl border border-neutral-border bg-white shadow-design flex items-center justify-center hover:bg-gray-50">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="md:w-6 md:h-6"
                  >
                    <path
                      d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                      fill="#1877F2"
                    />
                  </svg>
                </button>

                {/* Apple */}
                <button className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl border border-neutral-border bg-white shadow-design flex items-center justify-center hover:bg-gray-50">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="md:w-6 md:h-6"
                  >
                    <path
                      d="M18.71 19.5C18.44 20.68 17.63 21.82 16.59 22.7C15.59 23.58 14.34 24.01 13.04 24C11.67 24 10.33 23.73 9.04 23.18C7.75 22.63 6.52 21.80 5.37 20.69C4.22 19.58 3.15 18.28 2.17 16.78C1.19 15.28 0.71 13.58 0.74 11.69C0.77 9.8 1.31 8.12 2.36 6.66C3.41 5.2 4.98 4.05 6.93 3.21C8.88 2.37 11.1 1.84 13.59 1.62C16.08 1.4 18.44 1.49 20.66 1.9C20.47 2.98 19.87 3.9 18.86 4.65C17.85 5.4 16.44 5.93 14.62 6.25C14.4 6.29 14.17 6.31 13.95 6.31C13.72 6.31 13.5 6.29 13.28 6.25C11.46 5.93 10.05 5.4 9.04 4.65C8.03 3.9 7.43 2.98 7.24 1.9C9.46 1.49 11.82 1.4 14.31 1.62C16.8 1.84 19.02 2.37 20.97 3.21C22.92 4.05 24.49 5.2 25.54 6.66C26.59 8.12 27.13 9.8 27.16 11.69C27.19 13.58 26.71 15.28 25.73 16.78C24.75 18.28 23.68 19.58 22.53 20.69C21.38 21.80 20.15 22.63 18.86 23.18C17.57 23.73 16.23 24 14.86 24C13.56 24.01 12.31 23.58 11.31 22.7C10.27 21.82 9.46 20.68 9.19 19.5C9.01 18.68 8.92 17.83 8.92 16.95C8.92 16.07 9.01 15.22 9.19 14.4C9.46 13.22 10.27 12.08 11.31 11.2C12.31 10.32 13.56 9.89 14.86 9.9C16.23 9.9 17.57 10.17 18.86 10.72C20.15 11.27 21.38 12.1 22.53 13.21C23.68 14.32 24.75 15.62 25.73 17.12C26.71 18.62 27.19 20.32 27.16 22.21C27.13 24.1 26.59 25.78 25.54 27.24C24.49 28.7 22.92 29.85 20.97 30.69C19.02 31.53 16.8 32.06 14.31 32.28C11.82 32.5 9.46 32.41 7.24 32C7.43 30.92 8.03 30 9.04 29.25C10.05 28.5 11.46 27.97 13.28 27.65C13.5 27.61 13.72 27.59 13.95 27.59C14.17 27.59 14.4 27.61 14.62 27.65C16.44 27.97 17.85 28.5 18.86 29.25C19.87 30 20.47 30.92 20.66 32C18.44 32.41 16.08 32.5 13.59 32.28C11.1 32.06 8.88 31.53 6.93 30.69C4.98 29.85 3.41 28.7 2.36 27.24C1.31 25.78 0.77 24.1 0.74 22.21C0.71 20.32 1.19 18.62 2.17 17.12C3.15 15.62 4.22 14.32 5.37 13.21C6.52 12.1 7.75 11.27 9.04 10.72C10.33 10.17 11.67 9.9 13.04 9.9C14.34 9.89 15.59 10.32 16.59 11.2C17.63 12.08 18.44 13.22 18.71 14.4C18.89 15.22 18.98 16.07 18.98 16.95C18.98 17.83 18.89 18.68 18.71 19.5Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-footer py-4">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 gap-4 md:gap-0">
          {/* Left side - Copyright */}
          <div className="flex items-center gap-2">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3a20ce62b4f8387f2c2fd691bdc984bb494d6c43?width=42"
              alt="Logo"
              className="w-5 h-4"
            />
            <span className="font-sarabun text-xs md:text-sm font-light text-text-secondary">
              © 2024
            </span>
          </div>

          {/* Right side - Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <a
              href="#"
              className="font-sarabun text-xs md:text-sm font-light text-black hover:underline"
            >
              About
            </a>
            <a
              href="#"
              className="font-sarabun text-xs md:text-sm font-light text-black hover:underline"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="font-sarabun text-xs md:text-sm font-light text-black hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-sarabun text-xs md:text-sm font-light text-black hover:underline"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              className="font-sarabun text-xs md:text-sm font-light text-black hover:underline"
            >
              Copyright Policy
            </a>
            <a
              href="#"
              className="font-sarabun text-xs md:text-sm font-light text-black hover:underline"
            >
              Brand Policy
            </a>
            <a
              href="#"
              className="font-sarabun text-xs md:text-sm font-light text-black hover:underline"
            >
              Visitor Controls
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
