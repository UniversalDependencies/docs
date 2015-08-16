---
layout: base
title:  'Unresolved Issues'
---

## Issues to discuss at the Uppsala meeting

The main goal for the next UD release is to improve consistency across languages in the application of the UD guidelines. This will require resolving a number of issues where the guidelines are not specific enough to prescribe a unique analysis and where treebanks are known to diverge (or can be expected to diverge). Below we list a number of such issues that are suitable for discussion at the Uppsala meeting and where guidelines may need to be modified in future versions of the UD standard.

This list does not replace the Github <a href="https://github.com/universaldependencies/docs/issues">issue tracker</a>. It is rather a subset of open issues from the issue tracker, with main points emphasized here. The relevant issues in the issue tracker should be referenced from here; comments and on-line discussion should remain there.

1. Coordination. The guidelines specify that the first conjunct should be the head, but there are languages and constructions where, for example, inflection indicates that another conjunct (usually the final one) is the head. Examples from Turkish and Kazakh are found in issue <a href="https://github.com/UniversalDependencies/docs/issues/189">#189</a>. Should we insist that the first conjunct is always the head? Should we allow languages to choose a single consistent head-direction for coordination? Or should we allow this to vary within languages as well?

2. Copula sentences. The guidelines say that the copula verb should not be the root of a clause, but how do we draw the line between the copula verb and other uses of existential verbs like "be"? This is discussed in issue <a href="https://github.com/UniversalDependencies/docs/issues/170">#170</a>. While everyone agrees that "is" is a copula in "She is nice" and "She is in shape", there is disagreement about "She is in London" and "The problem is that copulas are tricky". In addition, there is the issue of whether this treatment should be extended to other verbs, for example, inchoative copula verbs (English "become", French "devenir", Swedish "bli").

3. Cleft sentences. These are closely linked to copula sentences (at least in the case of Irish). Also, in Irish, there is no equivalent to the English expletive "it", which may lead to a different analysis from those of other languages. See issue <a href="https://github.com/UniversalDependencies/docs/issues/162">#162</a>

4. Determiners and pronouns. Many languages have words that can be used both as determiners ("this book") and full noun phrases ("this"). Should these words be tagged [u-pos/DET]() or [u-pos/PRON]()? Or should they be tagged [u-pos/DET]() when used as determiners and [u-pos/PRON]() when used as full noun phrases? See issue <a href="https://github.com/UniversalDependencies/docs/issues/159">#159</a>.

5. Ellipsis.
  See the
  <a href="http://universaldependencies.github.io/docs/cs/overview/specific-syntax.html#ellipsis">Czech documentation</a>
  for an overview of possibilities. 
  A related issue is <a href="https://github.com/UniversalDependencies/docs/issues/164">#164</a> (multiple root trees).
  Questions: 
  Are we satisfied with the [u-dep/remnant]() analysis in cases where function word promotion by head elision is not   applicable?
  Even if we are, what do we do in cases where it cannot be applied (such as two orphaned verb arguments, no coordination)?
  Do we still believe that `NULL` nodes are evil?
  Ideally, we should collect all examples related to ellipsis and provide guidelines how they should be analyzed.

6. Light-verb constructions. A recent poster at PARSEME has surveyed the annotation of LVCs in v1.1 and found three different approaches. The abstract of the poster will soon be available <a href="http://typo.uni-konstanz.de/parseme/index.php/2-general/138-admitted-posters-iasi-23-24-september-2015">here</a> (poster #13).

7. Multi-word expressions. A recent poster at PARSEME has surveyed the annotation of MWEs in v1.1 and found a number of   inconsistencies. The abstract of the poster will soon be available <a href="http://typo.uni-konstanz.de/parseme/index.php/2-general/138-admitted-posters-iasi-23-24-september-2015">here</a> (poster #5).

8. Multi-word abbreviations (<a href="https://github.com/UniversalDependencies/docs/issues/181">#181</a>). Some treebanks may split them to syntactic words? Others keep them together.
  The issue is also related to how different treebanks tokenize abbreviations and their punctuation.

9. Names. The guidelines say that multi-word names should be given an ordinary, compositional syntactic structure whenever possible, and otherwise analyzed as head-initial structures with the [u-dep/name]() relation. A typical example of the latter case is firstname-lastname expressions like "Sherlock Holmes". However, there are many languages where there is morphological evidence that the last name is the head in this kind of structure (for example, Hungarian). Should these languages still use the [u-dep/name]() relation? Are they allowed to take the last element as the head? Is this a parameter that varies across languages? A related issue is whether names with a compositional structure should still somehow be annotated as names is the enhanced dependency structure.

10. Particles. There is a special part-of-speech tag for grammatical particles, but it is often unclear what dependency  relation to assign to particles, for example, question particles (<a href="https://github.com/UniversalDependencies/docs/issues/178">#178</a>). The relations [u-dep/aux](), [u-dep/compound](), [u-dep/discourse](), [u-dep/expl](), and [u-dep/mark]() have all been proposed for various types of particles.

11. Tokenisation. In some languages (such as Kazakh and Turkish) it may be necessary to have dependency relations between sub-word units (often called inflectional groups, IGs), as discussed, for example, in <a href="https://github.com/UniversalDependencies/docs/issues/125">#125</a>. e.g. In the phrase "mavi arabadakiler", it is clear that the car (araba) is blue (mavi), not the people in it (-dakiler).

12. Clitics and clitic doubling. Should the clitics get assigned different relations with respect to whether they are used alone (obj or iobj) or in a doubling (expl)?

13. Conversion best practices: available software, documentation,
discussion of difficult constructions (in particular UD constructions
that require information that is not necessarily present in source
treebanks, e.g. control, the core vs non-core distinction, etc.), as
well as chosen solutions for different languages.

14. Future of UD: semantics?

15. Tool development. It would be very useful to have annotation and visualization software tailored for the UD scheme. It would also be nice to have a baseline processing pipeline for tokenization, tagging and parsing that could be trained on any UD treebank. 

16. Adpositions (<a href="https://github.com/UniversalDependencies/docs/issues/203">#203</a>). They are sometimes attached as `case`, sometimes as `mark` or `aux`, and the rules are not consistent across languages. More details are in <a href="http://github.com/UniversalDependencies/docs/files/1437/Adpositions.in.Universal.Dependencies.pdf">this document</a>. (Note that there is a slight overlap with the issue 10 above – Particles.)

17. Reflexive pronouns (<a href="https://github.com/UniversalDependencies/docs/issues/204">#204</a>). They are sometimes attached as `dobj`, sometimes as `compound:reflex` or `expl`, and the rules are not consistent across languages. More details are in <a href="http://github.com/UniversalDependencies/docs/files/1438/Inherently.reflexive.verbs.in.Universal.Dependencies.pdf">this document</a>.
