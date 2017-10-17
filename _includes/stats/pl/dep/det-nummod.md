

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is a language-specific subtype of [det]().
There are also 1 other language-specific subtypes of `det`: [det:numgov]().

15 nodes (0%) are attached to their parents as `det:nummod`.

12 instances of `det:nummod` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.26666666666667.

The following 3 pairs of parts of speech are connected with `det:nummod`: [pl-pos/NOUN]()-[pl-pos/NOUN]() (10; 67% instances), [pl-pos/NOUN]()-[pl-pos/DET]() (4; 27% instances), [pl-pos/ADP]()-[pl-pos/NOUN]() (1; 7% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 det:nummod	color:blue
1	Zamontowanie	zamontowanie	NOUN	ger:sg:nom:n:perf:aff	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	4	nsubj	_	_
2	immobilizera	immobilizer	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	to	to	AUX	pred	_	4	cop	_	_
4	wydatek	wydatek	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
5	około	około	PART	qub	_	6	nmod	_	_
6	kilkuset	kilkaset	DET	num:pl:gen:m2:congr	Animacy=Nhum|Case=Gen|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind	7	det:numgov	_	_
7	złotych	złoty	NOUN	subst:pl:gen:m2	Animacy=Nhum|Case=Gen|Gender=Masc|Number=Plur	4	det:nummod	_	SpaceAfter=No
8	.	.	PUNCT	interp	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:nummod	color:blue
1	Od	od	ADP	prep:gen:nwok	AdpType=Prep|Case=Gen|Variant=Short	3	case	_	_
2	kilkunastu	kilkanaście	DET	num:pl:gen:m3:congr	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind	3	det:nummod	_	_
3	miesięcy	miesiąc	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	obl	_	_
4	w	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	5	case	_	_
5	kraju	kraj	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	obl	_	_
6	działa	działać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	Agencja	agencja	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
8	Cenowa	cenowy	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	interp	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 det:nummod	color:blue
1	Dramat	dramat	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	rozegrał	rozegrać	VERB	praet:sg:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
3	się	się	PRON	qub	PronType=Prs|Reflex=Yes	2	expl:pv	_	_
4	w	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	2	advmod	_	_
5	ciągu	ciąg	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	case	_	_
6	kilku	kilka	DET	num:pl:gen:f:congr	Case=Gen|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind	7	det:numgov	_	_
7	sekund	sekunda	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	4	det:nummod	_	SpaceAfter=No
8	.	.	PUNCT	interp	_	2	punct	_	_

~~~


