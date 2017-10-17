

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

6771 nodes (9%) are attached to their parents as `nmod`.

6199 instances of `nmod` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.64037808300103.

The following 52 pairs of parts of speech are connected with `nmod`: [pl-pos/NOUN]()-[pl-pos/NOUN]() (4184; 62% instances), [pl-pos/NOUN]()-[pl-pos/PROPN]() (713; 11% instances), [pl-pos/NUM]()-[pl-pos/NOUN]() (555; 8% instances), [pl-pos/PROPN]()-[pl-pos/PROPN]() (317; 5% instances), [pl-pos/NOUN]()-[pl-pos/PRON]() (298; 4% instances), [pl-pos/NOUN]()-[pl-pos/PART]() (102; 2% instances), [pl-pos/VERB]()-[pl-pos/PART]() (76; 1% instances), [pl-pos/NUM]()-[pl-pos/PART]() (66; 1% instances), [pl-pos/ADJ]()-[pl-pos/NOUN]() (60; 1% instances), [pl-pos/ADP]()-[pl-pos/NOUN]() (52; 1% instances), [pl-pos/ADJ]()-[pl-pos/X]() (41; 1% instances), [pl-pos/NUM]()-[pl-pos/X]() (39; 1% instances), [pl-pos/PROPN]()-[pl-pos/X]() (33; 0% instances), [pl-pos/PROPN]()-[pl-pos/NOUN]() (26; 0% instances), [pl-pos/NOUN]()-[pl-pos/X]() (20; 0% instances), [pl-pos/DET]()-[pl-pos/NOUN]() (18; 0% instances), [pl-pos/PRON]()-[pl-pos/PART]() (16; 0% instances), [pl-pos/ADJ]()-[pl-pos/PART]() (15; 0% instances), [pl-pos/NOUN]()-[pl-pos/ADP]() (15; 0% instances), [pl-pos/NUM]()-[pl-pos/PROPN]() (15; 0% instances), [pl-pos/PRON]()-[pl-pos/NOUN]() (15; 0% instances), [pl-pos/NUM]()-[pl-pos/PRON]() (14; 0% instances), [pl-pos/X]()-[pl-pos/PROPN]() (9; 0% instances), [pl-pos/ADP]()-[pl-pos/PROPN]() (7; 0% instances), [pl-pos/PUNCT]()-[pl-pos/PROPN]() (7; 0% instances), [pl-pos/X]()-[pl-pos/NOUN]() (7; 0% instances), [pl-pos/ADP]()-[pl-pos/PART]() (6; 0% instances), [pl-pos/DET]()-[pl-pos/PART]() (5; 0% instances), [pl-pos/PROPN]()-[pl-pos/PART]() (5; 0% instances), [pl-pos/NUM]()-[pl-pos/ADP]() (4; 0% instances), [pl-pos/ADJ]()-[pl-pos/PROPN]() (2; 0% instances), [pl-pos/DET]()-[pl-pos/PRON]() (2; 0% instances), [pl-pos/NOUN]()-[pl-pos/ADJ]() (2; 0% instances), [pl-pos/NOUN]()-[pl-pos/CCONJ]() (2; 0% instances), [pl-pos/PART]()-[pl-pos/NOUN]() (2; 0% instances), [pl-pos/PART]()-[pl-pos/PART]() (2; 0% instances), [pl-pos/PROPN]()-[pl-pos/PRON]() (2; 0% instances), [pl-pos/X]()-[pl-pos/PRON]() (2; 0% instances), [pl-pos/X]()-[pl-pos/X]() (2; 0% instances), [pl-pos/ADP]()-[pl-pos/X]() (1; 0% instances), [pl-pos/ADV]()-[pl-pos/NOUN]() (1; 0% instances), [pl-pos/ADV]()-[pl-pos/PART]() (1; 0% instances), [pl-pos/DET]()-[pl-pos/ADP]() (1; 0% instances), [pl-pos/DET]()-[pl-pos/PROPN]() (1; 0% instances), [pl-pos/DET]()-[pl-pos/X]() (1; 0% instances), [pl-pos/PRON]()-[pl-pos/PRON]() (1; 0% instances), [pl-pos/PROPN]()-[pl-pos/ADP]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/ADP]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/NOUN]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/SCONJ]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/X]() (1; 0% instances), [pl-pos/X]()-[pl-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod	color:blue
1	Wylizała	wylizać	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	m	być	AUX	aglt:sg:pri:imperf:nwok	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|Variant=Short|VerbForm=Fin	1	aux	_	_
3	łyżeczkę	łyżeczka	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	1	obj	_	_
4	po	po	ADP	prep:loc	AdpType=Prep|Case=Loc	5	case	_	_
5	lodach	lody	NOUN	subst:pl:loc:n	Case=Loc|Gender=Neut|Number=Plur	3	nmod	_	SpaceAfter=No
6	.	.	PUNCT	interp	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod	color:blue
1	Bardzo	bardzo	ADV	adv:pos	Degree=Pos	2	advmod	_	_
2	dobrze	dobrze	ADV	adv:pos	Degree=Pos	3	advmod	_	_
3	spisali	spisać	VERB	praet:pl:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	się	się	PRON	qub	PronType=Prs|Reflex=Yes	3	expl:pv	_	_
5	na	na	ADP	prep:loc	AdpType=Prep|Case=Loc	6	case	_	_
6	Francorchamps	Francorchamps	PROPN	subst:sg:loc:n	Case=Loc|Gender=Neut|Number=Sing	3	obl	_	_
7	kierowcy	kierowca	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
8	Williamsa	Williams	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
9	.	.	PUNCT	interp	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nmod	color:blue
1	Takie	taki	DET	adj:sg:nom:n:pos	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	obl	_	_
2	zmurszałe	zmurszały	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	3	amod	_	_
3	jajo	jajo	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	_
4	musi	musieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	mieć	mieć	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf	4	xcomp	_	_
6	ze	z	ADP	prep:acc:wok	AdpType=Prep|Case=Acc|Variant=Long	7	case	_	_
7	sześć	sześć	NUM	num:pl:acc:m3:rec	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	5	obj	_	_
8	miliardów	miliard	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	7	case	_	_
9	lat	rok	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	interp	_	4	punct	_	_

~~~


