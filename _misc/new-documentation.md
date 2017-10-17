---
layout: base
title:  'Ideas for New Documentation'
udver: '2'
---

# Ideas for New Documentation

## Issues with current documentation:


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
  * Below the universal guidelines, there are buttons for each language (or some better UI element) that allows the user to toggle the visibility of the language-specific documentation. If there is a language-specific documentation for the selected language, it is shown below the universal guidelines. 
  * The selected languages are stored in a cookie so that a user can select the languages they are interested in and when they browse the documentation, the language-specific documentation for that language is always shown.
  
  
 * _Construction_ pages and _relation/POS_ pages:
   * Markdown-formatted pages similar to current relation pages.
   * Examples are no longer part of the markup of the page but instead embedded from example pages (allows for a more structured search and reusing of examples on multiple pages).
  
 * _Example_ pages:
   * Structured page with the following information:
     * Example in ConLL-U or SD format
     * Language
     * "Universally-relevant": A flag that indicates whether this example is intended to demonstrate something that is relevant for multiple languages.
     * (optional): Discussion of the example
     * "Links" to construction/relation/tag pages. 
 
 * _General pages_:
   * Markdown-formatted pages that allow embedding of examples
   
 * "_Treebank readme_":
   * Markdown-formatted pages that follow a template and allow embedding of examples
 
 * Link between examples and constructions:
   * Example pages show links to the constructions/relations that are relevant for the example.
   * One can browse through the examples for selected languages that are relevant for a certain construction/relation/tag.
 
 * Many GitHub discussion can probably be summarized with an example and a short description of what was discussed. Example pages might therefore make it easier to transfer results from discussions to the official documentation.
 
 * Search:
   * The search can be used to perform a full-text search of the documentation and to search for examples within the documentation.
   
 * Relations and POS tags are still linked in a table that highlights the organization of the tags/relations.
 
 * Constructions are linked in an alphabetical sorted (or hierarchical?) list 
  
  
  
  (I deliberately did not mention morphological featues. As Dan pointed out, this format might not work as well for morphological features, as, for example, there are a large number of cases but most of them are irrelevant for most languages, and a user might not want to read about all of them when they are only interested in the values for a particular language. So we probably need a different solution for these.)
 
## Proposal for a Construction Taxonomy

* Nominals (might as well get them out of the way before going into the more complex stuff)
  * Modification in nominals
    * Nominal modifiers (incl. appositions)
    * Adjectival modifiers
    * Numeral modifiers
    * Clausal modifiers (refer forward to complex clauses?)
  * Grammatical markers (aka function words)
    * Determiners
    * Classifiers
    * Adpositions
    
* Simple clauses
  * Predicates and core arguments
    * Intransitive clauses
    * Transitive clauses
    * Ditransitive clauses
    * Copular/nonverbal clauses
  * Non-core dependents of predicates
    * Oblique arguments and adjuncts
    * Adverbials (incl. negation)
    * Discourse
    * Vocative
  * Predicate realization
    * Auxiliary verbs
    * Complex predicates (move to MWE?)
    * Secondary predication (move to complex clauses?)
  * Core argument realization
    * Expletives
    * Reflexives
    * Pro-drop
    * Clitics
    * Dislocated
  * Special constructions
    * Passives
    * Causatives
    * Applicatives (?)
    * Existentials
    * Partitives (not sure whether these belong here or under nominals?)
    * Clefts

* Complex clauses (aka Subordination)
  * Complement clauses (cf. core arguments)
  * Adverbial clauses (cf. non-core dependents)
    * Comparative constructions	(move to special constructions?)
  * Adnominal clauses (cf. modifiers in nominals)
    * Relative clauses (unless treated under nominals)
  * Grammatical markers (aka function words)
    * Subordinating conjunctions (and adpositions)
    * Relative pronouns and similar

* Coordination
  * Clausal coordination (incl.	parataxis?)
  * Phrasal coordination (incl. head coordination)
    * Uneven coordination
    * Non-constituent coordination
  * Loose joining relations
    * Parataxis
    * Lists
  * Grammatical markers
    * Coordinating conjunctions (incl. paired conjunctions)
    * Clitics

* Multiword expressions
  * Fixed expressions
    * Adpositions ("in spite of")
    * Adverbs ("by and large")
    * Subordinating conjunctions ("bien que")
  * Compounds
  * Verbal MWEs (particle verbs, prepositional verbs, light verbs)
  * Names
  * Dates
  
* Special phenomena
  * Ellipsis
  * Disfluencies
  * Typographical errors
  * Punctuation
  * Symbols
