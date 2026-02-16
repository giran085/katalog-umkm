CORE OPERATING RULES :

1. Strict Scope & Minimalist Change: Modify only the files explicitly mentioned. Global refactoring or touching unrelated files is strictly prohibited, even if they appear connected.

2. No Unsolicited Refactoring: Do not change existing code structures, variable names, or logic without an explicit request. If asked to change a color, do not alter the function's structure.

3. No Ripple Effect: If a change triggers errors in other files (dependencies), DO NOT modify them directly. Simply inform me which files are affected.

4. Preserve Structure & Style: Do not change folder structures, add new index files, or delete existing comments. Follow the existing coding style; do not impose new "best practices" that alter the format of existing files.

5. Mandatory Confirmation: If a change requires involving more than 2 files, you MUST ask for permission before writing any code.

6. SURGICAL PRECISION: When editing a file, touch ONLY the specific target line(s) and character(s). Use grep/search tools to confirm context first. NEVER unintentionally modify or reformat surrounding lines (e.g., SVG paths, closing tags, tables, charts) even by a single character or whitespace. Verify that your edit changes ONLY what is requested and absolutely nothing else.