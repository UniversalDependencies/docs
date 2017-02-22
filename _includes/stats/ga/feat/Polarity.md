

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This feature is language-specific.
It occurs with 1 different values: `Neg`.

225 tokens (2%) have a non-empty value of `Polarity`.
54 types (1%) occur at least once with a non-empty value of `Polarity`.
34 lemmas (1%) occur at least once with a non-empty value of `Polarity`.
The feature is used with 4 part-of-speech tags: [ga-pos/PART]() (98; 1% instances), [ga-pos/VERB]() (75; 1% instances), [ga-pos/AUX]() (49; 0% instances), [ga-pos/X]() (3; 0% instances).

### `PART`

98 [ga-pos/PART]() tokens (11% of all `PART` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `PART` and `Polarity` co-occurred: <tt><a href="PartType.html">PartType</a>=Vb</tt> (76; 78%), <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (76; 78%).

`PART` tokens may have the following values of `Polarity`:

* `Neg` (98; 100% of non-empty `Polarity`): <em>nach, ní, níor, nár, ná, n'</em>

### `VERB`

75 [ga-pos/VERB]() tokens (7% of all `VERB` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `VERB` and `Polarity` co-occurred: <tt><a href="Mood.html">Mood</a>=Ind</tt> (70; 93%), <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (68; 91%), <tt><a href="Form.html">Form</a>=Len</tt> (52; 69%), <tt><a href="Tense.html">Tense</a>=Past</tt> (38; 51%).

`VERB` tokens may have the following values of `Polarity`:

* `Neg` (75; 100% of non-empty `Polarity`): <em>raibh, níl, bheidh, bhfuil, bhain, mbeidh, bhfuair, bhraitheann, bhíonn, chailleann</em>

`Polarity` seems to be **lexical feature** of `VERB`. 100% lemmas (25) occur only with one value of `Polarity`.

### `AUX`

49 [ga-pos/AUX]() tokens (22% of all `AUX` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `AUX` and `Polarity` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Cop</tt> (49; 100%), <tt><a href="Form.html">Form</a>=EMPTY</tt> (46; 94%), <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (40; 82%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (34; 69%).

`AUX` tokens may have the following values of `Polarity`:

* `Neg` (49; 100% of non-empty `Polarity`): <em>ní, nach, níor, nár, níorbh, nárbh</em>

### `X`

3 [ga-pos/X]() tokens (2% of all `X` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `X` and `Polarity` co-occurred: <tt><a href="Abbr.html">Abbr</a>=EMPTY</tt> (3; 100%), <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (3; 100%), <tt><a href="Dialect.html">Dialect</a>=Munster</tt> (2; 67%).

`X` tokens may have the following values of `Polarity`:

* `Neg` (3; 100% of non-empty `Polarity`): <em>dein, cha</em>

## Relations with Agreement in `Polarity`

The 10 most frequent relations where parent and child node agree in `Polarity`:
<tt>VERB --[<a href="../dep/advmod.html">advmod</a>]--> PART</tt> (36; 73%),
<tt>X --[<a href="../dep/advmod.html">advmod</a>]--> PART</tt> (2; 100%),
<tt>VERB --[<a href="../dep/obj.html">obj</a>]--> PART</tt> (1; 100%),
<tt>X --[<a href="../dep/conj.html">conj</a>]--> X</tt> (1; 100%).

