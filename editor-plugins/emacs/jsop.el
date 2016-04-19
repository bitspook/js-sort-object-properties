;;; jsop.el --- Sort Javascript object properties in ascending order using js-sort-object-properties

;; Copyright (C) 2015 Charanjit Singh <ckhabra@gmail.com>

;; Author: Charanjit Singh <ckhabra@gmail.com>
;; Version: 0.1
;; URL: https://github.com/channikhabra/js-sort-object-properties/editor-plugins/emacs

;;; Commentary:

;; Wraps jsop (https://github.com/channikhabra/js-sort-object-properties) for
;; convenient use in Emacs.  Provides an interactive command `jsop'.

;;; Code:

(defvar jsop-executable "jsop")

(defun command-not-found-message (program)
  "Construct a message about PROGRAM not found."
  (format
   "%s not found. Install it with: \"npm -g install js-sort-object-properties\" "
   program))

(defun code-format-error-message (bufname)
  "Construct a format error message with BUFNAME."
  (format
   "Could not apply jsop. See %s to check errors for details"
   bufname))

(defun jsop-region (program beg end)
  "Using PROGRAM, format each line in the BEG .. END region."
  (let* ((code (buffer-substring beg end))
         (sortedCode (shell-command-to-string (concat "echo \"" code "\" | " jsop-executable))))
    (save-excursion
      (delete-region beg end)
      (insert sortedCode)
      (indent-region beg end))))

(defun jsop (beg end)
  "Sort object properties for valid JS code from BEG to END.

Sorting is done according to the jsop command."
  (interactive "r")
  (jsop-region
   jsop-executable
   beg end))

(provide 'jsop)

;;; jsop.el ends here
