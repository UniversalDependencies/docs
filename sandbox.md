---
layout: base
title:  'Sandbox'
---

# Sandbox

This file is intended as a "sandbox" for trying out the editing
features. Feel free to make changes by clicking the "edit page" link
at the top. (You need to be a project member and logged in to GitHub
for this to work.)

(Please note: this page is public and shared with others, and its
contents will be regularly reset. Don't store anything you want to
keep here.)

----------

# Some markdown

* bulleted
* list

1. numbered
2. list

Link: [link text](http://www.example.com)

# header 1

## header 2

### header 3

#### header 4

*italics* and **bold**

`inline code`

----------

# Some visualizations

~~~ sdparse
Just some tokens
~~~

~~~ sdparse
Tokens/Noun with/Adpos POS/Noun
~~~

~~~ sdparse
A dependency
det(dependency, A)
~~~

<div class="sd-parse">
Alternative syntax
</div>

<div class="sd-parse" tabs="yes">
Dynamic visualization (click "edit!")
</div>

~~~ sdparse
Example with error
det(no-such, token)
~~~

----------

## CoNLL-U example

<div class="conllu-parse" tabs="yes">
1     Εγώ         εγώ        PRON    PRN      Num=Sing|Per=1     2      nsubj _ _
2-3   haven't   _        _       _        _                  _      _ _ _
2     have      have     VERB    VB       Tens=Pres          0      root _ _
3     not       not      ADV     RB       _                  2      neg _ _
4     a         a        DET     DT       _                  5      det _ _
5     clue      clue     NOUN    NN       Num=Sing           2      dobj _ _
6     .         .        PUNCT   .        _                  2      punct _ _
</div>

### Enhanced depencies
Let's use red for enhanced-only, blue for basic-only and black for basic&enhanced dependencies:
<div class="conllu-parse" tabs="yes" id="pirate-example">
# visual-style 4 5 ref color:red
# visual-style 6 4 nmod:poss color:red
# visual-style 6 5 nmod:poss color:blue
1   I   I   PRON    PRP Case=Nom|Number=Sing|Person=1|PronType=Prs  2   nsubj   _   _
2   saw see VERB    VBD Mood=Ind|Tense=Past|VerbForm=Fin    0   root    _   _
3   a   a   DET DT  Definite=Ind|PronType=Art   4   det _   _
4   man man NOUN    NN  Number=Sing 2   dobj    6:nmod:poss   _
5   whose   whose   PRON    WP$ Poss=Yes|PronType=Int   6   nmod:poss   4:ref   _
6   mother  mother  NOUN    NN  Number=Sing 7   nsubj   _   _
7   become  become  VERB    VB  VerbForm=Inf    4   acl:relcl   _   _
8   a   a   DET DT  Definite=Ind|PronType=Art   9   det _   _
9   pirate  pirate  NOUN    NN  Number=Sing 7   xcomp   _   SpaceAfter=No
10  .   .   PUNCT   .   _   2   punct   _   _
</div>

For shorter sentences we can use side-by-side view (this may be clearer, especially if empty nodes are introduced):
<table id="ellipsis-example">
<thead><tr><th>Basic</th><th>Enhanced</th></tr></thead>
<tbody><tr><td width="600">
<div class="conllu-parse" tabs="yes">
# visual-style 5 6 remnant color:blue
# visual-style 2 5 conj color:blue
1   I   I  _ _ _  2   nsubj   _  _
2   like like  _ _ _  0   root   _   _
3   tea tea _ _ _ 2 obj    _   _
4   and and _ _ _ 5   cc  _   _
5   you you _ _ _ 2 conj   _   _
6   rum rum _ _ _ 5  remnant _  _
7   .   .   _ _ _ 2  punct  _  _
</div>
</td><td width="600">
<div class="conllu-parse" tabs="yes">
# visual-style 6 7 obj color:red
# visual-style 6 5 nsubj color:red
# visual-style 2 6 conj color:red
1   I  _ _ _ _ 2  nsubj   _  _
2   like _ _ _ _ 0  root    _  _
3   tea _ _ _ _ 2  obj    _  _
4   and _ _ _ _ 5 cc  _  _
5   you _ _ _ _ 6 nsubj   _  _
6   E5.1 _ _ _ _ 2 conj    _  _
7   rum _ _ _ _ 6 obj  _ _
8   .   _ _ _ _ 2 punct   _  _
</div>
</td></tr></tbody>
</table>

### Foreign examples
Two sentences can be used to show the English translation of a foreign example:

<pre><code class="language-conllu"># give the toys to the children
1 donner donner VERB _ VerbForm=Inf 0 root _ give
2 les le DET _ Definite=Def|Number=Plur 3 det _ the
3 jouets jouet NOUN _ Gender=Masc|Number=Plur 1 dobj _ toys
4-5 aux _ _ _ _ _ _ _ _
4 à à ADP _ _ 6 case _ to
5 les le DET _ Definite=Def|Number=Plur 6 det _ the
6 enfants enfant NOUN _ Gender=Masc|Number=Plur 1 nmod _ children

# now the parallel English tree
1 give donner VERB _ VerbForm=Inf 0 root _ give
2 the le DET _ Definite=Def|Number=Plur 3 det _ the
3 toys jouet NOUN _ Gender=Masc|Number=Plur 1 dobj _ toys
4 to à ADP _ _ 6 case _ to
5 the le DET _ Definite=Def|Number=Plur 6 det _ the
6 children enfant NOUN _ Gender=Masc|Number=Plur 1 nmod _ children
</code></pre>

Simplified syntax + sentence label

~~~ conllu
# sentence-label long-label
1     I         I        PRON    PRN      Num=Sing|Per=1     2      nsubj _ _
2     have      have     VERB    VB       Tens=Pres          0      root _ _
~~~

<a name="hebrew" />

## Right-to-left text (Hebrew)

~~~ sdparse
Aדני/NOUN Aראה/VERB Aסרט/NOUN
nsubj(Aראה, Aדני)
dobj(Aראה, Aסרט)
~~~

Same without "A" (should trigger auto-insertion of "ˑ")

~~~ sdparse
דני/NOUN ראה/VERB סרט/NOUN
nsubj(ראה, דני)
dobj(ראה, סרט)
~~~

Same sentence in CoNLL-U:

~~~ conllu
1     ˑדניˑ       _        NOUN    _      _     2      nsubj _ _
2     ˑראהˑ       _        VERB    _      _     0      root  _ _
3     ˑסרטˑ       _        NOUN    _      _     2      dobj  _ _
~~~

Without literal "ˑ" in input  (should trigger auto-insertion)

~~~ conllu
1     דני       _        NOUN    _      _     2      nsubj _ _
2     ראה       _        VERB    _      _     0      root  _ _
3     סרט       _        NOUN    _      _     2      dobj  _ _
~~~

Does Arabic work as well?

~~~ conllu
1     ˑوَˑ       _        NOUN    _      _     2      nsubj _ _
2     ˑلاحَظَˑ       _        VERB    _      _     0      root  _ _
3     ˑالتَقْرِيرُˑ       _        NOUN    _      _     2      dobj  _ _
~~~

Without literal "ˑ" in input  (should trigger auto-insertion)

~~~ conllu
1     وَ       _        NOUN    _      _     2      nsubj _ _
2     لاحَظَ       _        VERB    _      _     0      root  _ _
3     التَقْرِيرُ       _        NOUN    _      _     2      dobj  _ _
~~~

~~~ conllu
1     ‎דני       _        NOUN    _      _     2      nsubj _ _
2     ‎ראה       _        VERB    _      _     0      root  _ _
3     ‎סרט       _        NOUN    _      _     2      dobj  _ _
~~~
----------

# Some Jekyll 

## Finnish documentation for relations containing "cop" 

{% for p in site.fi-dep %}
{% if p.title contains "cop" %}
{{ p.content }}
{% endif %}
{% endfor %}

## Finnish documentation for relations with tag "case"

{% for p in site.fi-dep %}
{% if p.tags contains "case" %}
{{ p.content }}
{% endif %}
{% endfor %}

----------

### Irish example
~~~ conllu
1	Eisean	eisean	PRON	PRON	_	0	ROOT	_	_
2	a	a	PART	PART	_	3	mark:prt	_	_
3	thug	tabhair	VERB	VERB	_	1	nsubj	_	_
4	chuig	chuig	ADP	ADP	_	3	case	_	_
5	an	an	DET	DET	_	6	det	_	_
6	mbád	bád	NOUN	NOUN	_	4	nmod	_	_
7	mé	mé	PRON	PRON	_	3	dobj	_	_
8	arú	arú	ADV	ADV	_	9	advmod	_	_
9	aréir	aréir	ADV	ADV	_	3	advmod	_	_
10	.	.	PUNCT	PUNCT	_	1	punct	_	_
~~~

### German
~~~ sdparse
Alles hat ein Ende , nur die Wurst hat zwei .
nsubj(hat-2,Alles)
obj(hat-2,Ende)
det(Ende,ein)
nsubj(hat-9,Wurst)
obj(hat-9,zwei)
det(Wurst,die)
advmod(hat-9,nur)
parataxis(hat-2,hat-9)
~~~

## Test for #363

~~~ conllu
# visual-style 6 7 obj color:red
# visual-style 5.1 5 nsubj color:red
# visual-style 2 5.1 conj color:red
# visual-style 5 6 remnant color:blue
# visual-style 2 5 conj color:blue
1   I    _ _ _ _ 2 nsubj   _  _
2   like _ _ _ _ 0 root    _  _
3   tea  _ _ _ _ 2 obj     _  _
4   and  _ _ _ _ 5 cc      _  _
5   you  _ _ _ _ 2 conj    5.1:nsubj  _
5.1 E5.1 _ _ _ _ _ _       2:conj _
6   rum  _ _ _ _ 5 remnant 5.1:obj _
7   .    _ _ _ _ 2 punct   _  _
~~~

Empty node test with full tree in DEPS

~~~ conllu
1	Sue	Sue	PROPN	_	_	2	nsubj	2:nsubj	_
2	likes	like	VERB	_	_	0	root	0:root	_
3	coffee	coffee	NOUN	_	_	2	obj	2:obj	_
4	and	and	CCONJ	_	_	5	cc	5:cc	_
5	Bill	a	PROPN	_	_	2	conj	5.1:nsubj	_
5.1	likes	like	VERB	_	_	_	_	2:conj	_
6	tea	tea	NOUN	_	_	5	orphan	5.1:obj	_

~~~

Simpler

~~~ conllu
1	This	this	PRON	_	_	2	orphan	2:nsubj	_
1.1	is	is	VERB	_	_	_	_	2:cop	_
2	valid	valid	ADJ	_	_	0	root	0:root	_

~~~

### Enhanced dependencies experiments

"Il governo sono io, non Walesa e presto vedrò il leader sovietico"

<div class="conllu-parse" tabs="yes" id="tut-2947">
# visual-style 5 11 nsubj color:red
# visual-style 8 3 nsubj color:red
1	"	"	PUNCT	FB	_	3	punct	_	SpaceAfter=No
2	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	governo	governo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
4	sono	essere	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	cop	_	_
5	io	io	PRON	PE	Number=Sing|Person=1|PronType=Prs	3	nsubj	11:nsubj	Propagate=Yes|SpaceAfter=No
6	,	,	PUNCT	FF	_	7	punct	_	_
7	non	non	ADV	BN	PronType=Neg	8	advmod	_	_
8	Walesa	Walesa	PROPN	SP	_	5	conj	3:nsubj	_
9	e	e	CCONJ	CC	_	11	cc	_	_
10	presto	presto	ADV	B	_	11	advmod	_	_
11	vedrò	vedere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	3	conj	_	_
12	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	leader	leader	NOUN	S	Gender=Masc	11	obj	_	_
14	sovietico	sovietico	ADJ	A	Gender=Masc|Number=Sing	13	amod	_	SpaceAfter=No
15	"	"	PUNCT	FB	_	3	punct	_	SpaceAfter=No
</div>
