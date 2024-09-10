# Parallel Treebanks

Treebanks of different langauges may be parallel, that is, sentences in treebank A are translations of sentences in treebank B. To make this fact automatically detectable and useful, it should be encoded in the machine-readable metadata in the README file of each such treebank. An ID should be selected for the parallel treebank set; in the ideal case, this ID is identical to the treebank ID in the repository name (e.g., the PUD – parallel universal dependencies – treebanks are named UD_English-PUD, UD_German-PUD etc., and the ID of the collection is "PUD"). However, it is not enough to rely on repository names because not all treebanks with identical acronyms are members of one parallel set, and sometimes there are reasons why members of the same set do not have the same acronym. In the case of PUD, the metadata line would be

```
Parallel: PUD
```

and it should appear in the README file of each treebank that belongs to the PUD set. It is then assumed that all treebanks in the set have the same number of sentences and for any N, the N-th sentence has the same meaning in each treebank of the set. It is recommended that the sentence ids are identical in this case. If one sentence in treebank A corresponds to several sentences in treebank B, the corresponding sentences in treebank B have to be exceptionally treated as one sentence in CoNLL-U; the root of the second sentence will be attached to the root of the first sentence via the `parataxis` relation. If the treebanks are split into training, development and test files, the split must be identical in all treebanks of the parallel set.

It is possible that only some sentences in a treebank are parallel to another treebank. For example, some treebanks contain the 20 Cairo examples (Cairo CICLing Corpus) but they also contain other sentences. Another example is the SET treebanks of Croatian and Serbian: They have different sizes and sources of the text, but a core part comes from the South European Times and is parallel. In such cases, the metadata line must have an extended form where the collection ID is followed by " = " and one or more ranges of sentence ids. Each range must be completely inside one CoNLL-U file, so if there is train, dev, and test, we need a separate range for each (make sure they are listed in the alphabetical order of the file names, i.e., dev first, then test, then train). Again, training sentences must be parallel with training sentences, dev with dev, test with test. It is assumed that corresponding ranges in parallel treebanks have the same numbers of sentences (but note that M ranges in treebank A may correspond to N ranges in treebank B; a 1-1 mapping between ranges is not required).

A range is defined by the sent_id of the first and the last sentence in the range, delimited by ' .. ' (note the spaces around the range operator, they are there to avoid confusion with the characters in the sentence id). If there are multiple separate ranges (either from different data files or interrupted by sentences that are not parallel), the ranges are listed on one line and separated by ' , ' (again with spaces). If a range consists of just a single sentence, the sentence id is indicated only once and there is no ' .. ' delimiter.

Croatian example:

```
Parallel: SET = set.hr-s1 .. set.hr-s569 , set.hr-s571 .. set.hr-s3692
```

Serbian lacks the translation of set.hr-s570 and the numbering of the sentences is out of sync but otherwise the sentences before and after the missing one are parallel.

```
Parallel: SET = set-s1 .. set-s3694
```

A treebank may contain segments that belong to different parallel collections. Then there will be multiple `Parallel` lines in the treebank's README.

Finally, a treebank may contain data that is parallel to parts of other treebanks but the treebanks are not results of one annotation project and it is not practical to require a 1-1 mapping between sentences. A prominent example is the Bible. Various treebanks contain portions of Bible translations, there are partial pairwise overlaps in the verses covered, but for each language pair the overlap may be different. On the other hand, there is an established reference system that identifies the source verse for each token; UD uses the optional [Ref](https://universaldependencies.org/misc.html#ref) attribute in MISC to encode this. For example, `Ref=GEN_1.1` in MISC means that the token is from Genesis 1.1; `Ref=MATT_5.15` marks a token from the Gospel of Matthew 5.15. In these cases, the metadata line will simply indicate there are some sentences taken from the Bible and the `Ref` attribute in MISC is used to map tokens to known segments:

```
Parallel: Bible (Ref)
```

## Current parallel treebanks in UD (this list may be incomplete)

* PUD: Arabic, Bengali (currently empty), Chinese, Czech, English, Finnish, French, Galician, German, Hindi, Icelandic, Indonesian, Italian, Japanese, Japanese PUDLUW, Korean, Magahi (currently empty), Polish, Portuguese, Russian, Spanish, Swedish, Thai, Turkish
* ParTUT: English, French, Italian
* LinES: English, Swedish
* SET: Croatian, Serbian
* HK: Cantonese, Chinese
* ZhGSD: Chinese GSD, Chinese GSDSimp
* JaGSD: Japanese GSD, Japanese GSDLUW
* Atis: English, Turkish
* Bible: Ancient Greek PROIEL, Ancient Hebrew, Coptic, Gothic, Latin PROIEL, Old Church Slavonic, Romanian Nonstandard, Yoruba
* Cairo: Latgalian, Latvian, Luxembourgish, Tswana, others have it as one part of larger data (Buryat, Macedonian, Malayalam, what else?)
