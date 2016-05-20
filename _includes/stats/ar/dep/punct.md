

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.

22435 nodes (8%) are attached to their parents as `punct`.

18521 instances of `punct` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 15.7947849342545.

The following 17 pairs of parts of speech are connected with `punct`: [ar-pos/NOUN]()-[ar-pos/PUNCT]() (5918; 26% instances), [ar-pos/CONJ]()-[ar-pos/PUNCT]() (4808; 21% instances), [ar-pos/VERB]()-[ar-pos/PUNCT]() (3520; 16% instances), [ar-pos/X]()-[ar-pos/PUNCT]() (3413; 15% instances), [ar-pos/ADJ]()-[ar-pos/PUNCT]() (2233; 10% instances), [ar-pos/NUM]()-[ar-pos/PUNCT]() (1559; 7% instances), [ar-pos/PRON]()-[ar-pos/PUNCT]() (442; 2% instances), [ar-pos/PUNCT]()-[ar-pos/PUNCT]() (351; 2% instances), [ar-pos/ADV]()-[ar-pos/PUNCT]() (87; 0% instances), [ar-pos/PART]()-[ar-pos/PUNCT]() (60; 0% instances), [ar-pos/DET]()-[ar-pos/PUNCT]() (17; 0% instances), [ar-pos/ADP]()-[ar-pos/PUNCT]() (15; 0% instances), [ar-pos/PROPN]()-[ar-pos/PUNCT]() (6; 0% instances), [ar-pos/AUX]()-[ar-pos/PUNCT]() (2; 0% instances), [ar-pos/INTJ]()-[ar-pos/PUNCT]() (2; 0% instances), [ar-pos/CONJ]()-[ar-pos/NOUN]() (1; 0% instances), [ar-pos/VERB]()-[ar-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 punct	color:blue
1	بطولة	بُطُولَة	NOUN	N------S1R	Case=Nom|Definite=Red|Number=Sing	0	root	_	Vform=بُطُولَةُ|Gloss=championship,starring_role,heroism|Root=b_.t_l|Translit=buṭūlatu|LTranslit=buṭūlat
2	مصر	مِصر	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	1	nmod	_	SpaceAfter=No|Vform=مِصرَ|Gloss=Egypt|Root=m_.s_r|Translit=miṣra|LTranslit=miṣr
3	:	:	PUNCT	G---------	_	2	punct	_	Vform=:|Translit=:
4	القلعة	قَلعَة	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	1	dep	_	Vform=اَلقَلعَةُ|Gloss=stronghold,citadel,fort|Root=q_l_`|Translit=al-qalʿatu|LTranslit=qalʿat
5	الحمراء	أَحمَر	ADJ	A-----FS1D	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	4	amod	_	SpaceAfter=No|Vform=اَلحَمرَاءُ|Gloss=red|Root=.h_m_r|Translit=al-ḥamrāʾu|LTranslit=ʾaḥmar
6	.	.	PUNCT	G---------	_	1	punct	_	SpaceAfter=No|Vform=.|Translit=.
7	.	.	PUNCT	G---------	_	1	punct	_	SpaceAfter=No|Vform=.|Translit=.
8	.	.	PUNCT	G---------	_	1	punct	_	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 13 punct	color:blue
1	و	وَ	CONJ	C---------	_	0	root	_	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
2	قالت	قَال	VERB	VP-A-3FS--	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Voice=Act	1	parataxis	_	Vform=قَالَت|Gloss=say,tell|Root=q_w_l|Translit=qālat|LTranslit=qāl
3	"	"	PUNCT	G---------	_	5	punct	_	Vform="|Translit="
4	س	سَ	PART	F---------	_	5	aux	_	Vform=سَ|Gloss=will|Root=sa|Translit=sa|LTranslit=sa
5	نلتقي	اِلتَقَى	VERB	VIIA-1MP--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	2	ccomp	_	Vform=نَلتَقِي|Gloss=meet,encounter|Root=l_q_y|Translit=naltaqī|LTranslit=iltaqā
6	عند	عِندَ	ADP	PI------4-	AdpType=Prep|Case=Acc	7	case	_	Vform=عِندَ|Gloss=at,with|Root=`_n_d|Translit=ʿinda|LTranslit=ʿinda
7	عودة	عَودَة	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	5	nmod	_	Vform=عَودَةِ|Gloss=return|Root=`_w_d|Translit=ʿawdati|LTranslit=ʿawdat
8	نا	هُوَ	PRON	SP---1MP2-	Case=Gen|Gender=Masc|Number=Plur|Person=1|PronType=Prs	7	nmod	_	Vform=نَا|Gloss=he,she,it|Translit=nā|LTranslit=huwa
9	من	مِن	ADP	P---------	AdpType=Prep	10	case	_	Vform=مِن|Gloss=from|Root=min|Translit=min|LTranslit=min
10	مدينة	مَدِينَة	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	7	nmod	_	Vform=مَدِينَةِ|Gloss=city|Root=m_d_n|Translit=madīnati|LTranslit=madīnat
11	البصرة	بَصرَة	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	10	nmod	_	SpaceAfter=No|Vform=اَلبَصرَةِ|Gloss=Basra|Root=b_.s_r|Translit=al-baṣrati|LTranslit=baṣrat
12	"	"	PUNCT	G---------	_	5	punct	_	SpaceAfter=No|Vform="|Translit="
13	.	.	PUNCT	G---------	_	1	punct	_	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 punct	color:blue
1	و	وَ	CONJ	C---------	_	0	root	_	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
2	قالت	قَال	VERB	VP-A-3FS--	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Voice=Act	1	parataxis	_	Vform=قَالَت|Gloss=say,tell|Root=q_w_l|Translit=qālat|LTranslit=qāl
3	"	"	PUNCT	G---------	_	5	punct	_	Vform="|Translit="
4	س	سَ	PART	F---------	_	5	aux	_	Vform=سَ|Gloss=will|Root=sa|Translit=sa|LTranslit=sa
5	نلتقي	اِلتَقَى	VERB	VIIA-1MP--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	2	ccomp	_	Vform=نَلتَقِي|Gloss=meet,encounter|Root=l_q_y|Translit=naltaqī|LTranslit=iltaqā
6	عند	عِندَ	ADP	PI------4-	AdpType=Prep|Case=Acc	7	case	_	Vform=عِندَ|Gloss=at,with|Root=`_n_d|Translit=ʿinda|LTranslit=ʿinda
7	عودة	عَودَة	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	5	nmod	_	Vform=عَودَةِ|Gloss=return|Root=`_w_d|Translit=ʿawdati|LTranslit=ʿawdat
8	نا	هُوَ	PRON	SP---1MP2-	Case=Gen|Gender=Masc|Number=Plur|Person=1|PronType=Prs	7	nmod	_	Vform=نَا|Gloss=he,she,it|Translit=nā|LTranslit=huwa
9	من	مِن	ADP	P---------	AdpType=Prep	10	case	_	Vform=مِن|Gloss=from|Root=min|Translit=min|LTranslit=min
10	مدينة	مَدِينَة	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	7	nmod	_	Vform=مَدِينَةِ|Gloss=city|Root=m_d_n|Translit=madīnati|LTranslit=madīnat
11	البصرة	بَصرَة	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	10	nmod	_	SpaceAfter=No|Vform=اَلبَصرَةِ|Gloss=Basra|Root=b_.s_r|Translit=al-baṣrati|LTranslit=baṣrat
12	"	"	PUNCT	G---------	_	5	punct	_	SpaceAfter=No|Vform="|Translit="
13	.	.	PUNCT	G---------	_	1	punct	_	Vform=.|Translit=.

~~~


