---
layout: base
title:  'Statistics of nummod in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="cs_pdt-dep-nummod-gov.html">nummod:gov</a></tt>.

19656 nodes (1%) are attached to their parents as `nummod`.

11404 instances of `nummod` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.59401709401709.

The following 13 pairs of parts of speech are connected with `nummod`: <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (17417; 89% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (1536; 8% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (319; 2% instances), <tt><a href="cs_pdt-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (210; 1% instances), <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (99; 1% instances), <tt><a href="cs_pdt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (28; 0% instances), <tt><a href="cs_pdt-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (17; 0% instances), <tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (13; 0% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (8; 0% instances), <tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="cs_pdt-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="cs_pdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="cs_pdt-pos-PART.html">PART</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nummod	color:blue
1	Obrázek	obrázek	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No
2	:	:	PUNCT	Z:-------------	_	3	punct	3:punct	_
3	3	3	NUM	C=-------------	NumForm=Digit|NumType=Card	1	nummod	1:nummod	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nummod	color:blue
1	Výrobce	výrobce	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	0:root	_
2	-	-	PUNCT	Z:-------------	_	3	punct	3:punct	_
3	typ	typ	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	1	conj	0:root|1:conj	SpaceAfter=No
4	:	:	PUNCT	Z:-------------	_	5	punct	5:punct	_
5	PANASONIC	Panasonic	PROPN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|NameType=Com,Pro|Number=Sing|Polarity=Pos	3	nmod	3:nmod:nom	_
6	PANAFAX	Panafax	PROPN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|NameType=Pro|Number=Sing|Polarity=Pos	5	nmod	5:nmod:nom	_
7	UF	UF	PROPN	NNXXX-----A---8	Abbr=Yes|NameType=Pro|Polarity=Pos	6	nmod	6:nmod	SpaceAfter=No|LId=UF-98
8	-	-	PUNCT	Z:-------------	_	9	punct	9:punct	SpaceAfter=No
9	311	311	NUM	C=-------------	NumForm=Digit|NumType=Card	7	nummod	7:nummod	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	The	the	ADJ	AAXXX----1A----	Degree=Pos|Foreign=Yes|Polarity=Pos	0	root	0:root	LId=the-1|LGloss=(obv._souč._anglických_názvů,_urč._člen)
2	Black	Black	ADJ	AAXXX----1A----	Degree=Pos|Foreign=Yes|NameType=Com,Oth|Polarity=Pos	1	flat:foreign	1:flat:foreign	_
3	Box	Box	ADJ	AAXXX----1A----	Degree=Pos|Foreign=Yes|NameType=Com,Oth|Polarity=Pos	1	flat:foreign	1:flat:foreign	_
4	Summer	Summer	ADJ	AAXXX----1A----	Degree=Pos|Foreign=Yes|NameType=Oth|Polarity=Pos	1	flat:foreign	1:flat:foreign	_
5	Festival	Festival	PROPN	NNIXX-----A----	Animacy=Inan|Foreign=Yes|Gender=Masc|NameType=Oth|Polarity=Pos	1	flat:foreign	1:flat:foreign	_
6	of	of	ADP	RR--X----------	AdpType=Prep|Foreign=Yes	1	flat:foreign	1:flat:foreign	LId=of-1|LGloss=(obv._souč._anglických_názvů,_předl._2._p.)
7	Czech	Czech	ADJ	AAXXX----1A----	Degree=Pos|Foreign=Yes|Polarity=Pos	1	flat:foreign	1:flat:foreign	LId=Czech-2
8	20	20	NUM	C=-------------	NumForm=Digit|NumType=Card	9	nummod	9:nummod	SpaceAfter=No
9	th	th	ADJ	AAXXX----1A----	Degree=Pos|Foreign=Yes|Polarity=Pos	1	flat:foreign	1:flat:foreign	LId=th-2
10	Century	Century	ADJ	AAXXX----1A----	Degree=Pos|Foreign=Yes|NameType=Oth|Polarity=Pos	1	flat:foreign	1:flat:foreign	_
11	Plays	Plays	PROPN	NNFPX-----A----	Foreign=Yes|Gender=Fem|NameType=Oth|Number=Plur|Polarity=Pos	1	flat:foreign	1:flat:foreign	SpaceAfter=No
12	-	-	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


