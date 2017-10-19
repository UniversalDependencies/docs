---
layout: base
title:  'Statistics of nummod in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: [nummod:gov]().

19664 nodes (1%) are attached to their parents as `nummod`.

11408 instances of `nummod` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.58314686737185.

The following 12 pairs of parts of speech are connected with `nummod`: [-pos/NOUN]()-[-pos/NUM]() (17443; 89% instances), [-pos/PROPN]()-[-pos/NUM]() (1629; 8% instances), [-pos/ADJ]()-[-pos/NUM]() (261; 1% instances), [-pos/SYM]()-[-pos/NUM]() (152; 1% instances), [-pos/NUM]()-[-pos/NUM]() (99; 1% instances), [-pos/CCONJ]()-[-pos/NUM]() (28; 0% instances), [-pos/DET]()-[-pos/NUM]() (17; 0% instances), [-pos/PRON]()-[-pos/NUM]() (12; 0% instances), [-pos/VERB]()-[-pos/NUM]() (10; 0% instances), [-pos/PUNCT]()-[-pos/NUM]() (7; 0% instances), [-pos/ADV]()-[-pos/NUM]() (5; 0% instances), [-pos/INTJ]()-[-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nummod	color:blue
1	Obrázek	obrázek	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No
2	:	:	PUNCT	Z:-------------	_	3	punct	_	_
3	3	3	NUM	C=-------------	NumForm=Digit|NumType=Card	1	nummod	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nummod	color:blue
1	Výrobce	výrobce	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	_
2	-	-	PUNCT	Z:-------------	_	3	punct	_	_
3	typ	typ	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	1	conj	_	SpaceAfter=No
4	:	:	PUNCT	Z:-------------	_	5	punct	_	_
5	PANASONIC	Panasonic	PROPN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|NameType=Com,Pro|Number=Sing|Polarity=Pos	3	nmod	_	_
6	PANAFAX	Panafax	PROPN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|NameType=Pro|Number=Sing|Polarity=Pos	5	nmod	_	_
7	UF	UF	PROPN	NNXXX-----A---8	Abbr=Yes|NameType=Pro|Polarity=Pos	6	nmod	_	SpaceAfter=No|LId=UF-98
8	-	-	PUNCT	Z:-------------	_	9	punct	_	SpaceAfter=No
9	311	311	NUM	C=-------------	NumForm=Digit|NumType=Card	7	nummod	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	The	the	ADJ	AAXXX----1A----	Degree=Pos|Foreign=Yes|Polarity=Pos	11	flat:foreign	_	LId=the-1|LGloss=(obv._souč._anglických_názvů,_urč._člen)
2	Black	Black	ADJ	AAXXX----1A----	Degree=Pos|Foreign=Yes|NameType=Com,Oth|Polarity=Pos	11	flat:foreign	_	_
3	Box	Box	ADJ	AAXXX----1A----	Degree=Pos|Foreign=Yes|NameType=Com,Oth|Polarity=Pos	11	flat:foreign	_	_
4	Summer	Summer	ADJ	AAXXX----1A----	Degree=Pos|Foreign=Yes|NameType=Oth|Polarity=Pos	11	flat:foreign	_	_
5	Festival	Festival	PROPN	NNIXX-----A----	Animacy=Inan|Foreign=Yes|Gender=Masc|NameType=Oth|Polarity=Pos	11	flat:foreign	_	_
6	of	of	ADP	RR--X----------	AdpType=Prep|Foreign=Yes	11	flat:foreign	_	LId=of-1|LGloss=(obv._souč._anglických_názvů,_předl._2._p.)
7	Czech	Czech	ADJ	AAXXX----1A----	Degree=Pos|Foreign=Yes|Polarity=Pos	11	flat:foreign	_	LId=Czech-2
8	20	20	NUM	C=-------------	NumForm=Digit|NumType=Card	9	nummod	_	SpaceAfter=No
9	th	th	ADJ	AAXXX----1A----	Degree=Pos|Foreign=Yes|Polarity=Pos	11	flat:foreign	_	LId=th-2
10	Century	Century	ADJ	AAXXX----1A----	Degree=Pos|Foreign=Yes|NameType=Oth|Polarity=Pos	11	flat:foreign	_	_
11	Plays	Plays	PROPN	NNFPX-----A----	Foreign=Yes|Gender=Fem|NameType=Oth|Number=Plur|Polarity=Pos	0	root	_	SpaceAfter=No
12	-	-	PUNCT	Z:-------------	_	11	punct	_	_

~~~


