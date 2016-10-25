---
layout: base
title:  'Introduction'
permalink: swl/overview/introduction.html
---

# Introduction

The Swedish Sign Language UD treebank is based on the [The Swedish Sign Language Corpus](http://www.ling.su.se/teckenspråksresurser/teckenspråkskorpusar/svensk-teckenspråkskorpus/svensk-teckenspråkskorpus-1.176807) (SSLC), consisting of video and accompanying annotation files (Mesch et al., 2012b, Mesch et al., 2015). The corpus consists of naturalistic, dyadic signing, the majority of the data coming from conversational type texts, and a smaller part coming from elicited narratives. In total, 300 texts have been recorded, distributed over 42 different signers (Mesch, 2012; Mesch et al., 2012a). Annotation is made with the ELAN software (Wittenburg et al., 2006), producing annotation cells on tiers time-aligned with the video files. The most recent (2016) update of the SSLC contains 48,690 sign tokens, spanning just over 6 hours of video data, distributed across 85 files and 42 signers. The annotation files contain six main tiers: four for the sign glosses (i.e., one for each of the hands of the two signers) and two for written translations into Swedish (i.e., one tier for each signer) (Mesch and Wallin, 2015). In addition, the SSLC contains part-of-speech (PoS) tags that are attached to the gloss annotations on the sign-gloss tier (e.g., "PRO1[PN]"). The tagging procedure was based on a semiautomatic method on an earlier version of the corpus (Östling et al., 2015), and subsequent expansions have been manually tagged. Recently, a minor part of the corpus has also been syntactically annotated. This process involves segmentation of the sign stream into clauses and annotation of predicates, arguments and optional modifiers within these clauses (Börstell et al., 2016). The Swedish Sign Language UD treebank is based on a semiautomatic mapping of the part-of-speech tags and manual conversion of the syntactic annotation to the corresponding UD categories and relations.

## Source of annotations

This table summarizes the origins and checking of the various columns of the CoNLL-U data.

Manual annotation is performed in ELAN, the [ud-swl project repository](https://github.com/robertostling/ud-swl) contains original annotation files and conversion scripts, along with preliminary annotation guidelines (only in Swedish for now).

| Column | Status |
| ------ | ------ |
| ID | "Sentence" segmented according to dependency tree, "tokenization" from original SSLC annotation. |
| FORM | From the original SSLC annotation. |
| LEMMA | &mdash; (currently unused) |
| UPOSTAG | Mapped from XPOSTAG. |
| XPOSTAG | From Östling et al. (2015) |
| FEATS | &mdash; (currently unused) |
| HEAD | Manual annotation. |
| DEPREL | Manual annotation. |
| DEPS | &mdash; (currently unused) |
| MISC | &mdash; (currently unused) |

## References

* Börstell, C., Wirén, M., Mesch, J. & Gärdenfors, M. (2016). [Towards an Annotation of Syntactic Structure in the Swedish Sign Language Corpus.](http://su.diva-portal.org/smash/record.jsf?dswid=5363&pid=diva2%3A928395&c=4&searchType=RESEARCH&language=sv&query=&af=%5B%5D&aq=%5B%5B%7B%22personId%22%3A%22mwir%22%7D%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=100&sortOrder=dateIssued_sort_desc&onlyFullText=false&sf=all) In: Eleni Efthimiou, Stavroula-Evita Fotinea, Thomas Hanke, Julie Hochgesang, Jette Kristoffersen & Johanna Mesch (Ed.), _Proc. 7th Workshop on the Representation and Processing of Sign Languages: Corpus Mining_, (pp. 19–24). Workshop at the Language Resources and Evaluation Conference (LREC).
* Mesch, J., Wallin, L., Nilsson, A.-L., and Bergman, B. (2012b). Dataset. Swedish Sign Language Corpus project 2009–2011 (version 1).
* Mesch, J., Rohdell, M., and Wallin, L. (2015). Annotated files for the Swedish Sign Language Corpus. Version 3.
* Mesch, J. (2012). Swedish Sign Language Corpus. _Deaf Studies Digital Journal_, 3.
* Wittenburg, P., Brugman, H., Russel, A., Klassmann, A., and Sloetjes, H. (2006). ELAN: A professional framework for multimodality research. _Proc. 5th International Conference on Language Resources and Evaluation (LREC 2006)_, pages 1556–1559.
* Mesch, J., Wallin, L., and Björkstrand, T. (2012a). Sign Language Resources in Sweden: Dictionary and Corpus. In Onno Crasborn, et al., editors, _Proc. 5th Workshop on the Representation and Processing of Sign Languages: Interactions between Corpus and Lexicon. Language Resources and Evaluation Conference (LREC)_, pages 127–130.
* Mesch, J. and Wallin, L. (2015). Gloss annotations in the Swedish Sign Language Corpus. _International Journal of Corpus Linguistics_, 20(1):103–121.
* Östling, R., Börstell, C., and Wallin, L. (2015). [Enriching the Swedish Sign Language Corpus with part of speech tags using joint Bayesian word alignment and annotation transfer.](http://su.diva-portal.org/smash/record.jsf?dswid=5363&pid=diva2%3A810265&c=9&searchType=SIMPLE&language=sv&query=&af=%5B%5D&aq=%5B%5B%7B%22personId%22%3A%22cab2091+OR+0000-0001-7549-4648%22%7D%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&onlyFullText=false&sf=all) In Beáta Megyesi, editor, _Proc. of the 20th Nordic Conference on Computational Linguistics (NODALIDA 2015)_, NEALT Proceedings Series 23, pages 263–268, Vilnius. ACL Anthology.
