---
layout: base
title:  'Statistics of nsubj:pass in UD_Marathi-CMUPAN'
udver: '2'
---

## Treebank Statistics: UD_Marathi-CMUPAN: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="mr_cmupan-dep-nsubj.html">nsubj</a></tt>.

125 nodes (0%) are attached to their parents as `nsubj:pass`.

125 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.064.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="mr_cmupan-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_cmupan-pos-NOUN.html">NOUN</a></tt> (75; 60% instances), <tt><a href="mr_cmupan-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_cmupan-pos-PROPN.html">PROPN</a></tt> (27; 22% instances), <tt><a href="mr_cmupan-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_cmupan-pos-PRON.html">PRON</a></tt> (19; 15% instances), <tt><a href="mr_cmupan-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_cmupan-pos-ADJ.html">ADJ</a></tt> (4; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 nsubj:pass	color:blue
1	पूर्वी	पूर्वी	NOUN	_	_	8	obl	_	Translit=purvi|LTranslit=purvi
2	एकेकाळी	एकेकाळी	NOUN	_	_	8	obl	_	Translit=ekekali|LTranslit=ekekali
3	हे	हे	PRON	_	PronType=Dem	4	det	_	Translit=he|LTranslit=he
4	मुंग	मुंग	NOUN	_	Case=Nom|Number=Sing	8	nsubj:pass	_	Translit=mumga|LTranslit=mumga
5	बीनप्रमाणे	बीनप्रमाणे	ADV	_	_	8	advmod	_	Translit=binapramane|LTranslit=binapramane
6	त्याच	ते	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	7	det	_	Translit=tyacha|LTranslit=te
7	प्रजातींचे	प्रजाती	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	8	obj	_	Translit=prajatimche|LTranslit=prajati
8	मानले	मान	VERB	_	Case=Nom|Gender=Neut|Number=Sing|VerbForm=Fin	0	root	_	Translit=manale|LTranslit=mana
9	जायचे	जाणे	AUX	_	Aspect=Hab|Gender=Neut|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	aux:pass	_	Translit=jayache|LTranslit=jane
10	.	.	PUNCT	_	_	8	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj:pass	color:blue
1	डॉ.	डॉ.	PROPN	_	_	2	compound	_	Translit=daॉ.|LTranslit=daॉ.
2	सुंचू	सुंचू	PROPN	_	_	8	nsubj:pass	_	Translit=sumchu|LTranslit=sumchu
3	५२७	५२७	NUM	_	NumType=Card	4	nummod	_	Translit=527|LTranslit=527
4	मतांसह	मत	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	8	obl	_	Translit=matamsaha|LTranslit=mata
5	धक्कादायकरित्या	धक्कादायकरित्या	ADV	_	_	8	advmod	_	Translit=dhakkadayakaritya|LTranslit=dhakkadayakaritya
6	चौथ्या	चौथा	ADJ	_	NumType=Ord	7	amod	_	Translit=chauthya|LTranslit=chautha
7	स्थानावर	स्थान	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	8	obl	_	Translit=sthanavara|LTranslit=sthana
8	फेकले	फेक	VERB	_	Aspect=Perf|Gender=Masc|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Translit=phekale|LTranslit=pheka
9	गेले	जाणे	AUX	_	Aspect=Perf|Gender=Masc|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	8	aux:pass	_	Translit=gele|LTranslit=jane
10	.	.	PUNCT	_	_	8	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	त्याने	तो	PRON	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Prs	2	nsubj:pass	_	Translit=tyane|LTranslit=to
2	दिलेल्या	देणे	VERB	_	Case=Nom|Gender=Fem	3	acl	_	Translit=dilelya|LTranslit=dene
3	माहितीनुसार	माहिती	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	7	obl	_	Translit=mahitinusara|LTranslit=mahiti
4	वर्मा	वर्मा	PROPN	_	Gender=Masc|Number=Sing	7	nsubj	_	Translit=varma|LTranslit=varma
5	याला	हा	PRON	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	7	obj	_	Translit=yala|LTranslit=ha
6	अटक	अटक	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	7	compound	_	Translit=ataka|LTranslit=ataka
7	करण्यात	करणे	VERB	_	VerbForm=Fin	0	root	_	Translit=karanyata|LTranslit=karane
8	आली	येणे	AUX	_	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux	_	Translit=ali|LTranslit=yene
9	.	.	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.

~~~


