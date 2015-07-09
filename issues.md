---
layout: base
title:  'Unresolved Issues'
---

## Issues to discuss at the Uppsala meeting

The main goal for the next UD release is to improve consistency across languages in the application of the UD guidelines. This will require resolving a number of issues where the guidelines are not specific enough to prescribe a unique analysis and where treebanks are known to diverge (or can be expected to diverge). Below we list a number of such issues that are suitable for discussion at the Uppsala meeting and where guidelines may need to be modified in future versions of the UD standard.

This list does not replace the Github <a href="https://github.com/universaldependencies/docs/issues">issue tracker</a>. It is rather a subset of open issues from the issue tracker, with main points emphasized here. The relevant issues in the issue tracker should be referenced from here; comments and on-line discussion should remain there.

* Coordination. The guidelines specify that the first conjunct should be the head, but there are languages and constructions where, for example, inflection indicates that another conjunct (usually the final one) is the head. Examples from Turkish and Kazakh are found in issue <a href="https://github.com/UniversalDependencies/docs/issues/189">#189</a>. Should we insist that the first conjunct is always the head? Should we allow languages to choose a single consistent head-direction for coordination? Or should we allow this to vary within languages as well?

* Copula sentences. The guidelines say that the copula verb should not be the root of a clause, but how do we draw the line between the copula verb and other uses of existential verbs like "be"? This is discussed in issue <a href="https://github.com/UniversalDependencies/docs/issues/170">#170</a>. While everyone agrees that "is" is a copula in "She is nice" and "She is in shape", there is disagreement about "She is in London" and "The problem is that copulas are tricky". In addition, there is the issue of whether this treatment should be extended to other verbs, for example, inchoative copula verbs (English "become", French "devenir", Swedish "bli").

* Determiners and pronouns. Many languages have words that can be used both as determiners ("this book") and full noun phrases ("this"). Should these words be tagged [u-pos/DET]() or [u-pos/PRON]()? Or should they be tagged [u-pos/DET]() when used as determiners and [u-pos/PRON]() when used as full noun phrases? See issue <a href="https://github.com/UniversalDependencies/docs/issues/159">#159</a>.

* Ellipsis.
  See the
  <a href="http://universaldependencies.github.io/docs/cs/overview/specific-syntax.html#ellipsis">Czech documentation</a>
  for an overview of possibilities. 
  A related issue is <a href="https://github.com/UniversalDependencies/docs/issues/164">#164</a> (multiple root trees).
  Questions: 
  Are we satisfied with the [u-dep/remnant]() analysis in cases where function word promotion by head elision is not   applicable?
  Even if we are, what do we do in cases where it cannot be applied (such as two orphaned verb arguments, no coordination)?
  Do we still believe that `NULL` nodes are evil?
  Ideally, we should collect all examples related to ellipsis and provide guidelines how they should be analyzed.

* Multi-word abbreviations (<a href="https://github.com/UniversalDependencies/docs/issues/181">#181</a>).
  Some treebanks may split them to syntactic words? Others keep them together.
  The issue is also related to how different treebanks tokenize abbreviations and their punctuation.

* Names. The guidelines say that multi-word names should be given an ordinary, compositional syntactic structure whenever possible, and otherwise analyzed as head-initial structures with the [u-dep/name]() relation. A typical example of the latter case is firstname-lastname expressions like "Sherlock Holmes". However, there are many languages where there is morphological evidence that the last name is the head in this kind of structure (for example, Hungarian). Should these languages still use the [u-dep/name]() relation? Are they allowed to take the last element as the head? Is this a parameter that varies across languages? A related issue is whether names with a compositional structure should still somehow be annotated as names is the enhanced dependency structure.

* Particles. There is a special part-of-speech tag for grammatical particles, but it is often unclear what dependency  relation to assign to particles, for example, question particles (<a href="https://github.com/UniversalDependencies/docs/issues/178">#178</a>). The relations [u-dep/aux](), [u-dep/compound](), [u-dep/discourse](), [u-dep/expl](), and [u-dep/mark]() have all been proposed for various types of particles.

* Tokenisation. In some languages (such as Kazakh and Turkish) it may be necessary to have dependency relations between sub-word units (often called inflectional groups, IGs), as discussed, for example, in <a href="https://github.com/UniversalDependencies/docs/issues/125">#125</a>. e.g. In the phrase "mavi arabadakiler", it is clear that the car (araba) is blue (mavi), not the people in it (-dakiler).
