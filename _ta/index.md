---
layout: base
title:  'Tamil UD'
udver: '2'
---

# UD for Tamil <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/LK.svg" /></span>

# Tamil UD Annotation Guidelines

This documentation provides practical guidelines for annotating Tamil data using the Universal Dependencies (UD) framework. The aim is to support consistent preprocessing, tokenisation, and morphological annotation of Tamil texts, while also documenting Tamil-specific issues such as Unicode normalisation, multiword tokenisation, clitic segmentation, case marking,  and sandhi.

These guidelines should be used together with the official UD documentation. Annotators should always consider the linguistic context before making annotation decisions, especially when a Tamil form can function differently across contexts.

## Documentation Pages

| Section | Description | Link |
|---|---|---|
| Preprocessing | Guidelines for Unicode normalisation, replacement of ambiguous characters, and preparation of text before annotation. | [Preprocessing](preprocessing.md) |
| Tokenisation and Multiword Tokenisation | Guidelines for sentence tokenisation, word tokenisation, multiword tokenisation, clitic segmentation, ADP segmentation, and cases where forms should not be split. | [Tokenisation](./mwe/tokenisation.md) |
| Morphological Features | Guidelines for annotating UD morphological features in Tamil, including Tamil-specific features such as deixis,  sandhi, and case. | [Morphological Features](features.md) |
| Dependency Relations | Guidelines for Annotating UD Dependency Relations: Core Arguments, Oblique Nominals, Clausal Structures, Coordination, Complex Predicates, and Tamil-Specific Syntactic Relations in the MWTT Treebank | [Dependency Relations](relations.md) |

## How to Use These Guidelines

Annotators should begin with preprocessing, then apply tokenisation and multiword-tokenisation rules, and finally add morphological and syntactic annotation. Tokenisation decisions should be made before morphological and dependency annotation, because segmentation affects UPOS, features, and dependency relations.

The examples in these guidelines are intended to illustrate annotation decisions, not to exhaust all possible Tamil constructions. When uncertain, annotators should consult the UD guidelines, Tamil grammar references, dictionaries, and corpus evidence.

## References

Abirami, A. M., Leong, W. Q., Rengarajan, H., Anitha, D., Suganya, R., Singh, H., ... & Shah, R. (2024, May). Aalamaram: A large-scale linguistically annotated treebank for the Tamil language. In *Proceedings of the 7th Workshop on Indian Language Data: Resources and Evaluation* (pp. 73–83).

Butt, M., Rajamathangi, S., & Sarveswaran, K. (2020). Mixed categories in Tamil via complex categories. In *Proceedings of the LFG’20 Conference* (pp. 68–88). CSLI Publications.

Krishnamurthy, P., & Sarveswaran, K. (2021, December). Towards building a modern written Tamil treebank. In *Proceedings of the 20th International Workshop on Treebanks and Linguistic Theories (TLT, SyntaxFest 2021)* (pp. 61–68).

Lehmann, T. (1993). *A Grammar of Modern Tamil*. Pondicherry Institute of Linguistics and Culture.

Nuhman, M. A. (1999). *Adippadai Tamil Ilakkanam* [Basic Tamil Grammar]. Readers’ Association.

Ramasamy, L., & Žabokrtský, Z. (2012). Prague Dependency Style Treebank for Tamil. In *Proceedings of the Eighth International Conference on Language Resources and Evaluation (LREC’12)* (pp. 1888–1894). European Language Resources Association (ELRA).

Sarveswaran, K. (2024). *Morphology and syntax of the Tamil language*. arXiv preprint arXiv:2401.08367.

Sarveswaran, K., Dias, G., & Butt, M. (2021). ThamizhiMorph: A morphological parser for the Tamil language. *Machine Translation, 35*(1), 37–70.


---

## Treebanks

There are two Tamil UD treebanks at present:

  * [Tamil-TTB](../treebanks/ta_ttb/index.html)
  * [Tamil-MWTT](../treebanks/ta_mwtt/index.html)
