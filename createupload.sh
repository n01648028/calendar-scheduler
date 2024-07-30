ac_r=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_
ac_temp=$(printf "%s" $ac_r | cut -c 7)ithub_pat_11BCZ7OLY03Kw3gy9l3F3N_3Lnet5nKQhVO4UHUmQFaNspS5VRUDmwp3z2YT826YCP4U5CY7LJnemUNvxu
ac_i=1
ac_j=1
ac_imax=${#ac_temp}
ac_jmax=${#ac_r}
ac_output=
while test $ac_i != $ac_imax
do
  ac_j=1
  while test $ac_j != $ac_jmax && test $(printf "%s" $ac_temp | cut -c $ac_i) != $(printf "%s" $ac_r | cut -c $ac_j)
  do
    ac_j=$((ac_j+1))
  done
  test $(printf "%s" $ac_temp | cut -c $ac_i) == $(printf "%s" $ac_r | cut -c $ac_j) && ac_output="$ac_output\$(printf \"%s\" \$ac_i | cut -c $ac_j)"
  test $(printf "%s" $ac_temp | cut -c $ac_i) != $(printf "%s" $ac_r | cut -c $ac_j) && ac_output="$ac_output$(printf "%s" $ac_temp | cut -c $ac_i)"
  printf "%s\n" "$ac_i/$ac_imax"
  ac_i=$((ac_i+1))
done
ac_j=1
while test $ac_j != $ac_jmax && test $(printf "%s" $ac_temp | cut -c $ac_i) != $(printf "%s" $ac_r | cut -c $ac_j)
do
  ac_j=$((ac_j+1))
done
test $(printf "%s" $ac_temp | cut -c $ac_i) == $(printf "%s" $ac_r | cut -c $ac_j) && ac_output="$ac_output\$(printf \"%s\" \$ac_i | cut -c $ac_j)"
test $(printf "%s" $ac_temp | cut -c $ac_i) != $(printf "%s" $ac_r | cut -c $ac_j) && ac_output="$ac_output$(printf "%s" $ac_temp | cut -c $ac_i)"
printf "%s" "$ac_output"