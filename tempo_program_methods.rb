
def tempo_invite
    puts "Please enter a tempo of your choice"
end

def user_input 
gets.chomp
end


def data_calculation(user_tempo)
user_tempo = user_tempo.to_f

quarter_ms = 60000/user_tempo
quarter_t_ms = (quarter_ms/3.0) * 2

eigth_ms = quarter_ms/2
eigth_dot_ms = eigth_ms * 1.5
eigth_t_ms = (eigth_ms/3.0) * 2

sixteenth_ms = quarter_ms/4
sixteenth_dot_ms = sixteenth_ms * 1.5
sixteenth_t_ms = (sixteenth_ms/3.0) * 2

pp hash = {
    :tempo_given_bpm => user_tempo,
    :quarter => quarter_ms.round(2),
    :quarter_t => quarter_t_ms.round(2),
    :eigth => eigth_ms.round(2),
    :eigth_dot => eigth_dot_ms.round(2),
    :eigth_t => eigth_t_ms.round(2),
    :sixteenth => sixteenth_ms.round(2),
    :sixteenth_dot => sixteenth_dot_ms.round(2),
    :sixteenth_t => sixteenth_t_ms.round(2),
}

end



u_t = 130

tempo_invite
user_tempo = user_input

data_calculation(user_tempo)