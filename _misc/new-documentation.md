---
layout: base
title:  'Ideas for New Documentation'
udver: '2'
---

# Ideas for New Documentation

## Main issues:


* The current documentation which is organized along relations rather than constructions makes it often hard to find the right analysis of a certain construction.
 * There is either a lot of redundancy (or conflicting statements) between the universal documentation and the language-specific documentation (in particular in the case of English) or very little to no language-specific documentation.
* Users have to go back and forth between the universal documentation and language-specific documentation and it is often not clear where to find the information.
* We have a lot of very productive GitHub discussions but there is no efficient process of transferring the results of a discussion from GitHub issues to the official documentation. Further, many interesting annotated examples are buried in the discussions.
* There is no efficient way to search for examples within the documentation. Currently, users can can only search in treebanks but there are no explanations attached to the results.
* Users might not know what a construction is called (or what we call it) but they might be able to search for it using a POS/surface token/dependency pattern.
* Providing a full language-specific documentation is often too big of a commitment for maintainers of a language and might not even be always necessary. A page that lists all the noteworthy things about a treebank or language, on the other hand, would require much less effort.


## Ideas

* 5 different types of pages:
  * General page (Introduction, contribution guidelines, organization, etc.)
  * Relations and POS tags (similar to current documentation)
  * Constructions (new)
  * Examples (new)
  * "Treebank readme" following a to-be-developed template (new)
  
* The pages for relations, POS tags, and the new construction pages should contain the universal as well as the language-specific guidelines on a single page.
  * The top part of the page contains the universal guidelines, similar to the ones we currently have with representative examples from a few languages and general descriptions of the relation/tag/construction.
  * The language-specific documentation should only contain things that are (e.g., examples in the language, noteworthy corner cases in the language, lists of lexical items that define a relation/tag/construction, etc.)
  * Below the universal guidelines, there are buttons for each language (or some better UI element) that allows the user to toggle the visibility of the language-specific documentation. If there is a language-specific documentation for the selected language, it is shown below the univeral guidelines. 
  * The selected languages are stored in a cookie so that a user can select the languages they are interested in and when they browse the documentation, the language-specific documentation for that language is always shown.
 
