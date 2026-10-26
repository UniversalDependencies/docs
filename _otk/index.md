---
layout: base
title: 'Old Turkish UD'
udver: '2'
---

# UD for Old Turkish <span class="flagspan"><img class="flag" src="../../flags/svg/TURKIC.svg" /></span>

On this page, _Old Turkish_ refers to the historical Turkic language identified by the ISO 639-3 code `otk`; _Old Turkic_ refers to one of the scripts in which Old Turkish was written. The currently released UD treebank is based on Old Turkic script texts, but the language documentation is intentionally written so that it can also accommodate future Old Uyghur and Karakhanid material written in other scripts. Old Turkish should therefore not be annotated by simply projecting the habits of present-day Turkish or of another modern Turkic treebank onto an older corpus.

The key language-specific point is that the data are script-faithful and syntactically fine-grained: many elements that look like bound morphology from a modern blankspace-based perspective are separate syntactic tokens in the current UD analysis.

## Tokenization and Word Segmentation

* Old Turkic script texts do not provide regular blankspace-based tokenization. Blankspace and line breaks must not be treated as ordinary word boundaries; in inscriptions, line breaks may even split a base morpheme.
* The colon, and occasionally a dot used in the same function, is the only reliable first-pass delimiter. It separates the material before and after it, but the letters between two such signs are not automatically one UD word. They may correspond to one word, to a word plus an adposition, or to a phrase containing several syntactic words.
* After punctuation-based delimitation, further segmentation is grammatical. Primarily inflectional or clause-linking material may be tokenized separately: possessive and person markers, case markers, auxiliaries, converbs, tense-aspect-modality-evidentiality markers, and particles such as question, negation, or intensifier particles when they behave as independent syntactic units.
* Bound morphemes are not split mechanically. If a morpheme functions as a nominalizer and the result is analyzed as a `NOUN` or `PRON`, the resulting nominal is kept as one token. Likewise, verbalizing or voice-changing material that creates a lexical verb is not automatically promoted to a separate token.
* The current treebank has no multiword tokens in the CoNLL-U sense. Its fine-grained segmentation is represented by ordinary syntactic tokens rather than by surface-token ranges.
* Because ordinary spaces are not present as token separators in the current script material, `SpaceAfter=No` is important. It should not be silently replaced by implicit blankspace or by an assumption that `SpaceAfter=Yes` is the default.
* Sentence segmentation is also interpretive. It is based on clauses, conjunctions, and sentence roots rather than on line layout. The annotation should avoid gratuitous `parataxis`; where a sequence can be analyzed as coordinated material, coordination is preferred. Reported speech and genuine parenthetical material may require `parataxis` in future material.
* Tokenization is subject to refinement based on data extension with other scripts of Old Turkish corpora. Since other scripts have more regularized use of blankspace and overlap with initial segmentation rules of this language, their incorporation will increase data-based exemplification of the principles.

## Orthography

* The current released data keep Old Turkic script material in script-faithful form. Transliteration is useful for explanation, search, and tooling, but it is secondary to the script text and should be reversible where possible.
* Old Turkic is predominantly written right-to-left. Its punctuation is sparse, and vowels are represented only partially. Open unrounded vowels may be omitted except word-finally, and several consonant signs encode vowel backness through synharmonic variants. Annotation should therefore not normalize the text to a modern Turkish spelling system.
* Digital normalization should be conservative and explicit. Normalizing graphic variants, reducing script-specific variants, or decomposing syllabic signs is acceptable only when it is part of the documented encoding pipeline. Such normalization must not erase philologically relevant spellings or convert the corpus into a later standard orthography.
* Future trees in Old Uyghur, Arabic, or other scripts should follow the same principle: keep the relevant historical script in the data, and document script-specific Unicode normalization.

## Morphology

The current released treebank provides UPOS tags and basic dependency relations, but it does not provide lemmas, XPOS tags, or morphological features. For that reason, this page documents the current segmentation, UPOS, and syntactic decisions rather than a full Old Turkish feature inventory.

### Tags

The current treebank uses 13 UPOS tags: `ADJ`, `ADP`, `ADV`, `AUX`, `CCONJ`, `DET`, `NOUN`, `NUM`, `PRON`, `PROPN`, `PUNCT`, `SCONJ`, and `VERB`. The tags `PART`, `INTJ`, `SYM`, and `X` are currently unused in the released data.

* `ADP` is used for case markers once they are segmented as independent tokens.
* `DET` is used for possessive or person markers when they are attached to a nominal head. A similar pronominal form may be `PRON` when it is the only pronominal component of a phrase in head-final position. Pronominal copular material at the end of a clause is also tagged `DET` when it is treated as a determiner-like pronominal copula.
* `SCONJ` and `CCONJ` are used for verbal endings or converbs when their function is clause-linking: subordinating material is `SCONJ`, coordinating material is `CCONJ`.
* `AUX` is used for person-marker derivatives, TAME markers, converbs that function together with an auxiliary, the fully conjugated copula _er_ "to be", and other auxiliary-like verbal material when it is not the lexical head of the clause. These auxiliaries are kept as separate tokens rather than joined into one word.
* `VERB` is reserved for lexical predicates. A verb is not tagged `AUX` merely because it is semantically light. In particular, verbs corresponding roughly to "become" or "have" remain lexical predicates when they function as the clause head.
* `NUM` is used for numerals, including the components of complex numeral expressions. Complex numerals may involve both `compound` and `nummod`, depending on the internal structure of the expression.
* `PART` is currently not used. Items that traditional descriptions may call particles are assigned the major UPOS category required by their syntactic behavior, typically `ADV`, `SCONJ`, or `CCONJ`.

### Features

No morphological feature inventory is released for Old Turkish at present, and all FEATS values in the current treebank are empty. This is not a documentation omission. It reflects the current state of the treebank, where distinctions that might later become features are represented mainly through tokenization, UPOS tags, and dependencies.

When features are introduced, they should follow the universal UD feature inventory wherever possible. Language-specific features or values should be added only when they are necessary for Old Turkish and can be documented across the relevant corpora and scripts. Future feature work must also be coordinated with the tokenization policy above: categories currently represented as independent syntactic tokens should not automatically be duplicated as features on the lexical host.

## Syntax

Old Turkish is predominantly head-final and suffixing. Embedded clauses normally precede the main clause, but rich morphology allows pragmatic or translated material to show non-canonical order. The released treebank uses only universal dependency relations and no language-specific relation subtypes.

The current treebank uses the following relations: `advcl`, `advmod`, `amod`, `aux`, `case`, `cc`, `ccomp`, `compound`, `conj`, `cop`, `det`, `mark`, `nmod`, `nsubj`, `nummod`, `obj`, `obl`, `punct`, and `root`.

* Segmented case markers attach to the nominal with `case`. The relation of the nominal itself is determined by its syntactic function, not mechanically by the presence of a case marker.
* Dative and similar non-core arguments are generally analyzed as `obl`, not `iobj`, because the overt case marker is part of the Old Turkish analysis. The current treebank does not use `iobj`.
* A direct object may still be `obj` even when it has an overt case marker. Overt case alone does not turn a core object into `obl`.
* Segmented possessive and person markers on nouns attach with `det`. This is one of the main consequences of the Old Turkish segmentation policy and should not be normalized away in order to imitate modern blankspace-based Turkic words.
* Auxiliary-like tokens attach with `aux`. The relation `cop` is reserved for fully conjugated and pronominal copular material. Lexical verbs such as "become" or "have" should not be analyzed as `cop` when they remain the clause predicate.
* Conditional, converbial, and other subordinate clause-linking material is normally attached with `mark` to the dependent clause, and the clause itself is typically `advcl` or `ccomp` according to its function.
* If a clausal complement has a null subject, the current guideline is to use `ccomp` rather than `xcomp`. The released treebank currently does not use `xcomp`.
* Coordinating conjunctions attach with `cc`. When a coordinating element appears at the end of a coordinated sequence, it attaches to the preceding element, following the Old Turkish-specific analysis described for the treebank.
* Multi-word proper names should be analyzed with `flat` when they occur, although the current small release has no `flat` instances.
* Question or intensifier particles, when tokenized separately, are analyzed as `advmod`. Interjections, when they occur in future data, should be analyzed with `discourse`.
* The current treebank has no `acl` or `csubj` instances. Future treatment of adnominal and clausal-subject constructions will require special care because Old Turkish head-final syntax can make the boundary between nominalized clause and modifier structurally delicate.

## Treebanks

* [Old Turkish-Clausal](../treebanks/otk_clausal/index.html) — a manually annotated treebank of Old Turkic script texts. The current release provides manual UPOS and manual basic dependency annotation, but no lemmas, XPOS tags, or morphological features.

For the initial annotation rationale and tooling, see [Universal Dependencies for Old Turkish](https://aclanthology.org/2021.udw-1.11/).

## Diffs

### Old Turkish-Clausal

The released treebank is intentionally small, synthetic, and conservative. Compared with broader plans described in early project documentation, the current release uses 13 UPOS tags rather than a larger projected tag inventory, has no lemmas, has no XPOS tags, has no morphological features, and uses no relation subtypes.
