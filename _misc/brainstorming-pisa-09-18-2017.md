---
layout: base
title:  'UD Brainstorming Meeting at Depling in Pisa'
udver: '2'
---


# UD Brainstorming Meeting
Pisa, September 18, 2017

## Discussion points

* Documentation
* Constructions
* Enhanced Dependencies
* Multi-word expressions
* Treebank naming / flags
* How to use the repositories?

# Documentation

(see also list of issues/ideas on [this page](/misc/new-documentation.html))

* There is a consensus that the website should be organized around constructions. This should make it easier to find how a construction should be analyzed and should provide a more holistic view on analysis (E.g., passives in English are purely a dependency phenomenon, whereas passives in Swedish concern dependencies and morphological features)
* Majority of the discussion so far focused on how the website would be most useful for UD contributors. We should also consider other use cases and make sure the website also meets other users' needs.
* High priority should be given to developing a template to provide a short documentation of treebanks (much simpler than full language-specific documentation).
* Having a completely parallel language-specific documentation was too ambitious and is not really user-friendly.
* The search should allow synonyms for constructions (similar to the "redirected from" feature on Wikipedia).
* We need rules for the contribution process. Who can edit the universal guidelines? How should changes be approved? 
* The quality of treebanks varies a lot, which is not reflected. One idea is to have a rating system for the quality of a treebank (stars?) and a badge system for adding documentation, similar to the badge system on Stackoverflow.
* Perhaps there should be wiki-style links from one construction to another, with special formatting if the page is missing.
* Sometimes examples on website contradict examples in treebanks. Often unclear which one of the two is correct.
* The search should be improved so that one can search for examples in the documentation.
* We should consider having tags for pages to make it easier to find constructions etc.
* First step should be to define the use cases and then go from there.
* It is hard to find "controversial" sentences in treebanks. Often maintainers are uncertain about certain analyses but there is no way to flag that. There should be a method to flag these sentences in treebanks.


* **Working group**: Filip Ginter, Dan Zeman, Alexandre Rademaker, Teresa Lynn, Sylvain Kahane, Jenna Kanerva, Marie-Catherine de Marneffe, Sebastian Schuster



## Constructions

* We should have pages discussing constructions that exist in many languages.
* The list of constructions will be developed in the process of working out proposals for constructions. This will probably be a combination of a bottom-up (constructions suggested by the community) and a top-down (small group decides on the list of constructions) process.
* Work on specific constructions can already start before we have a list.
* List of constructions in WALS might be a starting point for a list of constructions, but probably not complete.
* Working groups that work out guidelines/descriptions of specific constructions should consider existing typological works.
* The goal of construction documentation should be the best solution, not the current state of the treebanks.
* Deviations from this ideal state should be documented in the language-specific documentation.
* BUT: When considering new analyses/analyses that differ from current annotation practices, consider "Ginter's razor". Complex changes should only be made when they substantially improve things.
* Constructions should have a holistic view on different annotation levels. They should not just be about dependency relations, but also discuss POS tags and morphology.

* List of some constructions that should be discussed (and person responsible for working out a proposal):
	* Some documentation already exists:
		* Coordination - ?
		* Ellipsis - ?
		* Multi-word expression - Kim Gerdes (should perhaps be harmonized with work from PARSEME cost action)
		* Comparative constructions - Dan Zeman
		* Parataxis - Sylvain Kahane
		* Punctuation - ?
	* No substantial documentation exists:
		* Expletives - Marie Candito
		* Clefts - Teresa Lynn
		* Causatives - Sylvain Kahane
		* Existentials - Fran Tyers
		* Partitives - ?
		* Complex predicates (maybe part of MWEs?) - ?
		* POS tags - Simonetta Montemagni
		* Names - Joakim Nivre
