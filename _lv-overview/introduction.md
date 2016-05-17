---
layout: base
title:  'Introduction'
permalink: lv/overview/introduction.html
---

# Introduction

Latvian UD Treebank is based on newswire section of the Latvian Treebank. Latvian Treebank was created 2010-2014 in the University of Latvia, Institute of Mathematics and Computer Science. Latvian Treebank is annotated according to an in-house hybrid annotation model and then automatically transformed to UD.

Annotations in Latvian Treebank:
* POS tag - semi-automatic;
* Lemmas - semi-automatic;
* Syntax - fully manual;

Annotations in Latvian UD Treebank:
1. ID: Word index, currently no ranges used.
2. FORM: Word form from Latvian Treebank - "words with spaces" are splitted automatically, otherwise used as-is.
3. LEMMA: Lemma from Latvian Treebank - for "words with spaces" are splitted automatically, otherwise used as-is.
4. UPOSTAG: Universal part-of-speech tag is automatically induced from original POS tag and syntactic role.
5. XPOSTAG: Original POS tag.
6. FEATS: List of morphological features is automatically induced from original POS tag and wordform.
7. HEAD: Head of the current token is automatically induced from original annotations.
8. DEPREL: Universal Stanford dependency relation to the HEAD is automatically induced from original annotation.
9. DEPS: Not used.
10. MISC: Curently only "SpaceAfter=No" is used.

## Acknowledgements

Data convertions is done by Lauma Pretkalniņa with the help of Baiba Saulīte. Latvian Treebank was created by Laura Rituma, Lauma Pretkalniņa and Baiba Saulīte.

## References

Pretkalniņa L., Rituma L. Constructions in Latvian Treebank: the Impact of Annotation Decisions on the Dependency Parsing Performance Proceedings of the 6th International Conference on Human Language Technologies — the Baltic Perspective (HLT 2014), Frontiers in Artificial Intelligence and Applications, Vol. 268, IOS Press, 2014, pp. 219–226

Pretkalniņa L., Nešpore G., Levāne-Petrova K., and Saulīte B. Towards a Latvian Treebank. Actas del 3 Congreso Internacional de Lingüística de Corpus. Tecnologias de la Información y las Comunicaciones: Presente y Futuro en el Análisis de Corpus, eds. Candel Mora M.Á., Carrió Pastor M., 2011, pp. 119–127
