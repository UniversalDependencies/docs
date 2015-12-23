

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.

1747 nodes (1%) are attached to their parents as `xcomp`.

1733 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.07097882083572.

The following 29 pairs of parts of speech are connected with `xcomp`: [ar-pos/VERB]()-[ar-pos/VERB]() (639; 37% instances), [ar-pos/VERB]()-[ar-pos/ADJ]() (530; 30% instances), [ar-pos/VERB]()-[ar-pos/NOUN]() (242; 14% instances), [ar-pos/NOUN]()-[ar-pos/NOUN]() (88; 5% instances), [ar-pos/VERB]()-[ar-pos/X]() (61; 3% instances), [ar-pos/NOUN]()-[ar-pos/ADJ]() (29; 2% instances), [ar-pos/X]()-[ar-pos/X]() (29; 2% instances), [ar-pos/X]()-[ar-pos/NOUN]() (20; 1% instances), [ar-pos/ADJ]()-[ar-pos/NOUN]() (16; 1% instances), [ar-pos/NOUN]()-[ar-pos/VERB]() (16; 1% instances), [ar-pos/VERB]()-[ar-pos/ADP]() (12; 1% instances), [ar-pos/PRON]()-[ar-pos/NOUN]() (9; 1% instances), [ar-pos/X]()-[ar-pos/ADJ]() (9; 1% instances), [ar-pos/ADJ]()-[ar-pos/ADJ]() (8; 0% instances), [ar-pos/NUM]()-[ar-pos/NOUN]() (8; 0% instances), [ar-pos/NOUN]()-[ar-pos/X]() (5; 0% instances), [ar-pos/PRON]()-[ar-pos/VERB]() (4; 0% instances), [ar-pos/VERB]()-[ar-pos/PRON]() (4; 0% instances), [ar-pos/PRON]()-[ar-pos/ADJ]() (3; 0% instances), [ar-pos/ADJ]()-[ar-pos/VERB]() (2; 0% instances), [ar-pos/NOUN]()-[ar-pos/PRON]() (2; 0% instances), [ar-pos/PRON]()-[ar-pos/X]() (2; 0% instances), [ar-pos/VERB]()-[ar-pos/NUM]() (2; 0% instances), [ar-pos/X]()-[ar-pos/VERB]() (2; 0% instances), [ar-pos/NOUN]()-[ar-pos/ADP]() (1; 0% instances), [ar-pos/NUM]()-[ar-pos/X]() (1; 0% instances), [ar-pos/PRON]()-[ar-pos/ADP]() (1; 0% instances), [ar-pos/VERB]()-[ar-pos/ADV]() (1; 0% instances), [ar-pos/X]()-[ar-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	وَ	_	CONJ	C---------	_	0	root	_	Translit=wa
2	كَانَت	_	VERB	VP-A-3FS--	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Voice=Act	1	parataxis	_	Translit=kānat
3	زَامبِيَا	_	X	X---------	Foreign=Foreign	2	nsubj	_	Translit=zāmbiyā
4	خَسِرَت	_	VERB	VP-A-3FS--	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Voice=Act	2	xcomp	_	Translit=ḫasirat
5	ذَهَابًا	_	NOUN	N------S4I	Case=Acc|Definite=Ind|Number=Sing	4	nmod	_	Translit=ḏahāban
6	صفر	_	X	U---------	_	4	advmod	_	Translit=Sfr
7	-	_	PUNCT	G---------	_	6	punct	_	Translit=-
8	١	_	NUM	Q---------	NumForm=Digit	6	conj	_	Translit=1
9	.	_	PUNCT	G---------	_	1	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp	color:blue
1	*	_	PUNCT	G---------	_	2	punct	_	Translit=*
2	وَ	_	CONJ	C---------	_	0	root	_	Translit=wa
3	هَل	_	PART	F---------	_	5	cc	_	Translit=hal
4	سَ	_	PART	F---------	_	5	aux	_	Translit=sa
5	تَكُونُ	_	VERB	VIIA-3FS--	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	2	parataxis	_	Translit=takūnu
6	اَلمَحكَمَةُ	_	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	5	nsubj	_	Translit=al-maḥkamatu
7	عَلَنِيَّةً	_	ADJ	A-----FS4I	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	5	xcomp	_	Translit=ʿalanīyatan
8	؟	_	PUNCT	G---------	_	2	punct	_	Translit=؟

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	*	_	PUNCT	G---------	_	4	punct	_	Translit=*
2	هَل	_	PART	F---------	_	4	cc	_	Translit=hal
3	سَ	_	PART	F---------	_	4	aux	_	Translit=sa
4	يَكُونُ	_	VERB	VIIA-3MS--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	Translit=yakūnu
5	اَلقُضَاةُ	_	NOUN	N------P1D	Case=Nom|Definite=Def|Number=Plur	4	nsubj	_	Translit=al-quḍātu
6	عِرَاقِيِّينَ	_	NOUN	N------P4I	Case=Acc|Definite=Ind|Number=Plur	4	xcomp	_	Translit=ʿirāqīyīna
7	؟	_	PUNCT	G---------	_	4	punct	_	Translit=؟

~~~


