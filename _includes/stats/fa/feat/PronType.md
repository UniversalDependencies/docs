

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This feature is universal.
It occurs with 8 different values: `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.

5603 tokens (4%) have a non-empty value of `PronType`.
91 types (1%) occur at least once with a non-empty value of `PronType`.
50 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: [fa-pos/PRON]() (5283; 4% instances), [fa-pos/ADV]() (320; 0% instances).

### `PRON`

5283 [fa-pos/PRON]() tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (4563; 86%), <tt><a href="Number.html">Number</a>=Sing</tt> (3581; 68%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (1471; 28% of non-empty `PronType`): آن، این، آن‌ها، آنان، این‌ها، همین، آنرا، همان، اینان، دان
* `Ind` (155; 3% of non-empty `PronType`): بعضی، برخی، دیگران، هرکس، یک، دیگری، بعضی‌ها، بسیاری، تک‌تک، دیگر
* `Int` (4; 0% of non-empty `PronType`): هرکه، کی
* `Neg` (8; 0% of non-empty `PronType`): هیچکدام، هیچکس، هیچیک، هیچ‌یک
* `Prs` (3290; 62% of non-empty `PronType`): خود، او، ش، ما، من، وی، شان، تو، م، شما
* `Rcp` (97; 2% of non-empty `PronType`): هم، یکدیگر، همدیگر
* `Rel` (43; 1% of non-empty `PronType`): آنچه
* `Tot` (215; 4% of non-empty `PronType`): همه، همهٔ، همگی، همگان، همه‌، تمام، هرکدام
* `EMPTY` (7): جنابعالی، حضرتعالی

`PronType` seems to be **lexical feature** of `PRON`. 93% lemmas (37) occur only with one value of `PronType`.

### `ADV`

320 [fa-pos/ADV]() tokens (9% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="Case.html">Case</a>=EMPTY</tt> (320; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Int` (320; 100% of non-empty `PronType`): چه، چرا، چی، چگونه، کجا، مگر، چقدر، چطور، کی، چه‌طور
* `EMPTY` (3419): پس، خیلی، هیچ، نه، پیش، بعد، حتی، بسیار، مثل، البته

`PronType` seems to be **lexical feature** of `ADV`. 100% lemmas (12) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/nmod:poss.html">nmod:poss</a>]--> PRON</tt> (143; 90%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (9; 75%),
<tt>PRON --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (5; 63%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (2; 100%),
<tt>PRON --[<a href="../dep/fixed.html">fixed</a>]--> PRON</tt> (1; 100%).

