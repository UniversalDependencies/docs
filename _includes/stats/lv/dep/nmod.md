

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

4470 nodes (21%) are attached to their parents as `nmod`.

3676 instances of `nmod` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.20626398210291.

The following 44 pairs of parts of speech are connected with `nmod`: [lv-pos/NOUN]()-[lv-pos/NOUN]() (2298; 51% instances), [lv-pos/VERB]()-[lv-pos/NOUN]() (862; 19% instances), [lv-pos/NOUN]()-[lv-pos/PROPN]() (541; 12% instances), [lv-pos/PROPN]()-[lv-pos/NOUN]() (202; 5% instances), [lv-pos/VERB]()-[lv-pos/PROPN]() (99; 2% instances), [lv-pos/VERB]()-[lv-pos/PRON]() (59; 1% instances), [lv-pos/ADJ]()-[lv-pos/NOUN]() (48; 1% instances), [lv-pos/NOUN]()-[lv-pos/SYM]() (42; 1% instances), [lv-pos/PROPN]()-[lv-pos/PROPN]() (41; 1% instances), [lv-pos/PUNCT]()-[lv-pos/NOUN]() (28; 1% instances), [lv-pos/VERB]()-[lv-pos/SCONJ]() (25; 1% instances), [lv-pos/SYM]()-[lv-pos/NOUN]() (24; 1% instances), [lv-pos/NOUN]()-[lv-pos/X]() (19; 0% instances), [lv-pos/X]()-[lv-pos/NOUN]() (19; 0% instances), [lv-pos/NOUN]()-[lv-pos/PRON]() (17; 0% instances), [lv-pos/NUM]()-[lv-pos/NOUN]() (15; 0% instances), [lv-pos/VERB]()-[lv-pos/SYM]() (15; 0% instances), [lv-pos/VERB]()-[lv-pos/NUM]() (13; 0% instances), [lv-pos/NOUN]()-[lv-pos/NUM]() (11; 0% instances), [lv-pos/PUNCT]()-[lv-pos/NUM]() (10; 0% instances), [lv-pos/VERB]()-[lv-pos/ADJ]() (10; 0% instances), [lv-pos/ADV]()-[lv-pos/NOUN]() (7; 0% instances), [lv-pos/NUM]()-[lv-pos/SYM]() (7; 0% instances), [lv-pos/ADJ]()-[lv-pos/PROPN]() (6; 0% instances), [lv-pos/SYM]()-[lv-pos/PROPN]() (6; 0% instances), [lv-pos/VERB]()-[lv-pos/X]() (6; 0% instances), [lv-pos/PUNCT]()-[lv-pos/PROPN]() (5; 0% instances), [lv-pos/ADJ]()-[lv-pos/SYM]() (4; 0% instances), [lv-pos/PRON]()-[lv-pos/NOUN]() (4; 0% instances), [lv-pos/X]()-[lv-pos/PROPN]() (4; 0% instances), [lv-pos/ADJ]()-[lv-pos/PRON]() (3; 0% instances), [lv-pos/PROPN]()-[lv-pos/NUM]() (3; 0% instances), [lv-pos/PROPN]()-[lv-pos/SYM]() (3; 0% instances), [lv-pos/VERB]()-[lv-pos/VERB]() (3; 0% instances), [lv-pos/PUNCT]()-[lv-pos/SYM]() (2; 0% instances), [lv-pos/ADJ]()-[lv-pos/NUM]() (1; 0% instances), [lv-pos/ADV]()-[lv-pos/SYM]() (1; 0% instances), [lv-pos/NOUN]()-[lv-pos/ADJ]() (1; 0% instances), [lv-pos/NOUN]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/NUM]()-[lv-pos/ADV]() (1; 0% instances), [lv-pos/PRON]()-[lv-pos/PRON]() (1; 0% instances), [lv-pos/PROPN]()-[lv-pos/PRON]() (1; 0% instances), [lv-pos/SCONJ]()-[lv-pos/NOUN]() (1; 0% instances), [lv-pos/VERB]()-[lv-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Dienas	diena	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
2	Bizness	bizness	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	6	parataxis	_	SpaceAfter=No
3	:	:	PUNCT	zo	_	2	punct	_	_
4	PF	PF	PROPN	y	_	5	nmod	_	_
5	Ķekava	Ķekava	PROPN	npfsn4	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
6	saķeras	saķerties	VERB	vmyipi130an	Mood=Ind|Negative=Neg|Person=3|Reflex=Yes|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	ar	ar	ADP	spsan	_	8	case	_	_
8	Nordea	Nordea	PROPN	np_sa0	Case=Acc|Number=Sing	6	dobj	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 nmod	color:blue
1	Dienas	diena	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
2	Bizness	bizness	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	4	parataxis	_	SpaceAfter=No
3	:	:	PUNCT	zo	_	2	punct	_	_
4	Kož	kost	VERB	vmnipt130an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	konkurentu	konkurents	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	_
6	klientu	klients	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	_
7	pīrāgā	pīrāgs	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	4	nmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	Kādas	kāda	DET	pq0fpan	Case=Acc|Gender=Fem|Number=Plur|PronType=Int	3	det	_	_
2	Eiropas	Eiropa	PROPN	npfsg4	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
3	likumdošanas	likumdošana	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
4	prasības	prasība	NOUN	ncfpa4	Case=Acc|Gender=Fem|Number=Plur	9	dobj	_	_
5	„	„	PUNCT	zq	_	6	punct	_	SpaceAfter=No
6	ZAAO	ZAAO	PROPN	y	_	9	nsubj	_	SpaceAfter=No
7	"	"	PUNCT	zq	_	6	punct	_	_
8	ir	būt	VERB	vcnipii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
9	izpildījusi	izpildīt	VERB	vmnpdfsnasn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
10	?	?	PUNCT	zs	_	9	punct	_	_

~~~


