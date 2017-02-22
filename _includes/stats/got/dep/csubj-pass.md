

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Gothic)

This relation is a language-specific subtype of [csubj]().

22 nodes (0%) are attached to their parents as `csubj:pass`.

21 instances of `csubj:pass` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.95454545454545.

The following 2 pairs of parts of speech are connected with `csubj:pass`: [got-pos/VERB]()-[got-pos/VERB]() (16; 73% instances), [got-pos/VERB]()-[got-pos/SCONJ]() (6; 27% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj:pass	color:blue
1	swaswe	swaswe	SCONJ	G-	_	3	mark	_	ref=2COR_1.8
2	afswaggwidai	af-swaggwjan	VERB	V-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Strength=Strong|Tense=Past|VerbForm=Part|Voice=Pass	3	xcomp	_	ref=2COR_1.8
3	weseima	wisan#1	VERB	V-	Mood=Opt|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=2COR_1.8
4	jal	jah	ADV	Df	_	5	advmod	_	ref=2COR_1.8
5	liban	liban	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	2	csubj:pass	_	ref=2COR_1.8

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj:pass	color:blue
1	gamelid	ga-meljan	VERB	V-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Strength=Strong|Tense=Past|VerbForm=Part|Voice=Pass	2	xcomp	_	ref=LUKE_4.4
2	ist	wisan#1	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=LUKE_4.4
3	þatei	þatei	SCONJ	G-	_	1	csubj:pass	_	ref=LUKE_4.4

~~~


