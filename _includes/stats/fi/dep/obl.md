

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

16646 nodes (9%) are attached to their parents as `obl`.

9960 instances of `obl` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.80926348672354.

The following 50 pairs of parts of speech are connected with `obl`: [fi-pos/VERB]()-[fi-pos/NOUN]() (11672; 70% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (1656; 10% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (1025; 6% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (523; 3% instances), [fi-pos/VERB]()-[fi-pos/NUM]() (424; 3% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (408; 2% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (231; 1% instances), [fi-pos/ADV]()-[fi-pos/NOUN]() (89; 1% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (75; 0% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (66; 0% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (62; 0% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (52; 0% instances), [fi-pos/NOUN]()-[fi-pos/PROPN]() (50; 0% instances), [fi-pos/PROPN]()-[fi-pos/NOUN]() (37; 0% instances), [fi-pos/ADJ]()-[fi-pos/PROPN]() (33; 0% instances), [fi-pos/NOUN]()-[fi-pos/NUM]() (28; 0% instances), [fi-pos/ADJ]()-[fi-pos/NUM]() (23; 0% instances), [fi-pos/NUM]()-[fi-pos/NOUN]() (21; 0% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (18; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (17; 0% instances), [fi-pos/VERB]()-[fi-pos/SYM]() (16; 0% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (15; 0% instances), [fi-pos/ADV]()-[fi-pos/PRON]() (14; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (12; 0% instances), [fi-pos/NUM]()-[fi-pos/PROPN]() (10; 0% instances), [fi-pos/PROPN]()-[fi-pos/PROPN]() (9; 0% instances), [fi-pos/NUM]()-[fi-pos/NUM]() (7; 0% instances), [fi-pos/VERB]()-[fi-pos/X]() (5; 0% instances), [fi-pos/ADP]()-[fi-pos/NOUN]() (4; 0% instances), [fi-pos/PRON]()-[fi-pos/PROPN]() (4; 0% instances), [fi-pos/PROPN]()-[fi-pos/NUM]() (4; 0% instances), [fi-pos/PUNCT]()-[fi-pos/NOUN]() (4; 0% instances), [fi-pos/SYM]()-[fi-pos/NOUN]() (4; 0% instances), [fi-pos/ADV]()-[fi-pos/NUM]() (3; 0% instances), [fi-pos/AUX]()-[fi-pos/PRON]() (3; 0% instances), [fi-pos/PROPN]()-[fi-pos/PRON]() (3; 0% instances), [fi-pos/ADV]()-[fi-pos/ADJ]() (2; 0% instances), [fi-pos/ADV]()-[fi-pos/PROPN]() (2; 0% instances), [fi-pos/AUX]()-[fi-pos/NOUN]() (2; 0% instances), [fi-pos/PRON]()-[fi-pos/ADJ]() (2; 0% instances), [fi-pos/PUNCT]()-[fi-pos/PRON]() (2; 0% instances), [fi-pos/ADP]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/SYM]() (1; 0% instances), [fi-pos/AUX]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/AUX]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/CCONJ]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/PUNCT]() (1; 0% instances), [fi-pos/X]()-[fi-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl	color:blue
1	Saavuin	saapua	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	siis	siis	ADV	Adv	_	1	advmod	_	_
3	kaupunkiin	kaupunki	NOUN	N	Case=Ill|Number=Sing	1	obl	_	_
4	kameraryhmäni	kamera#ryhmä	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	1	obl	_	_
5	kanssa	kanssa	ADP	Adp	AdpType=Post	4	case	_	_
6	jo	jo	ADV	Adv	_	8	advmod	_	_
7	ennen	ennen	ADP	Adp	AdpType=Prep	8	case	_	_
8	yhtätoista	yksi#toista	NUM	Num	Case=Par|Number=Sing|NumType=Card	1	obl	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl	color:blue
1	Yli	yli	ADV	Adv	_	2	advmod	_	_
2	600	600	NUM	Num	NumType=Card	3	nummod	_	_
3	vastusta	vastus	NOUN	N	Case=Par|Number=Sing	0	root	_	_
4	(	(	PUNCT	Punct	_	6	punct	_	SpaceAfter=No
5	joista	joka	PRON	Pron	Case=Ela|Number=Plur|PronType=Rel	6	obl	_	_
6	tarvin	tarvita	VERB	V	Mood=Ind|Number=Sing|Person=1|Style=Coll|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
7	alle	alle	ADV	Adv	_	8	advmod	_	_
8	kymmentä	kymmenen	NUM	Num	Case=Par|Number=Sing|NumType=Card	6	obj	_	SpaceAfter=No
9	)	)	PUNCT	Punct	_	6	punct	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl	color:blue
1	Sallan	Salla	PROPN	N	Case=Gen|Number=Sing	3	obl	_	_
2	kanssa	kanssa	ADP	Adp	AdpType=Post	1	case	_	_
3	tuli	tulla	VERB	V	Mood=Ind|Number=Sing|Person=0|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	iskettyä	iskeä	VERB	V	Case=Par|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	3	xcomp	_	_
5	silmät	silmä	NOUN	N	Case=Nom|Number=Plur	4	obj	_	_
6	samaan	sama	PRON	Pron	Case=Ill|Number=Sing|PronType=Ind	7	det	_	_
7	turboneuleeseen	turbo#neule	NOUN	N	Case=Ill|Number=Sing	4	obl	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


