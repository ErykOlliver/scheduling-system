'use client'

import React, { useEffect, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select, TextField, type SelectChangeEvent } from "@mui/material";
import { fetchGetServices } from '@/src/shared/api/service/service';
import { Service } from '../../services/type';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import 'dayjs/locale/pt-br';

export default function FormScheduling() {
    const [serviceList, setServiceList] = useState<Service[] | undefined>([])
    const [selectedService, setSelectedService] = useState('')
    const [date, setDate] = useState<Dayjs | null>(null);
    const [availableSlots, setAvailableSlots] = useState<string[]>([]);
    const [hours, setHours] = useState<string | null>(null);

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedService(event.target.value);
    };

    useEffect(() => {
        const getServices = async () => {
            const res = await fetchGetServices()
            setServiceList(res)
        }

        getServices()
    }, [])

    return (
        <div className='flex flex-col max-w-sm w-full gap-5 h-full justify-center items-center'>
            <header className='w-full'>
                <h1 className='text-white text-5xl font-medium'>Realize seu <br /> <span className='font-bold text-orange-600'>agendamento</span></h1>
            </header>
            <form className='flex flex-col w-sm border border-zinc-900 rounded-md py-2 px-3 gap-2'>
                <InputLabel id="demo-simple-select-label" sx={{ color: '#aaa', "&.Mui-focused": { color: "#f97316" } }}>Serviço</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedService}
                    size="small"
                    onChange={handleChange}
                    sx={{
                        color: "#fff",
                        "&.Mui-focused": {
                            color: "#fff"
                        },

                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#444"
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#f97316"
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#f97316"
                        },

                        "& .MuiSvgIcon-root": {
                            color: "#f97316"
                        }
                    }}
                >
                    {serviceList?.map((s, i) => (
                        <MenuItem
                            className="flex gap-2.5"
                            key={i}
                            value={s.id}
                        >
                            <div className="w-full h-fit flex flex-col items-start gap-2">
                                <h1>{s.name}</h1>
                                <div className="flex justify-between w-full">
                                    <div className="text-green-500/70 flex items-center gap-1 justify-center">
                                        <p className="">
                                            {
                                                new Intl.NumberFormat('pt-BR', {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }).format(Number(s.price) || 0).toString()
                                            }
                                        </p>
                                    </div>
                                    <div className="text-gray-500/70 flex items-center gap-1 justify-center">
                                        <p className="">{s.duration}min</p>
                                    </div>
                                </div>
                            </div>
                        </MenuItem>
                    ))}
                </Select>
                {selectedService && !date && (
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
                        <DateCalendar
                            value={date}
                            onChange={(newValue) => setDate(newValue)}
                            sx={{
                                border: "1px solid #444",
                                color: "#fff",
                                width: '100%',
                                "& *": {
                                    color: "#fff"
                                },

                                "& .MuiPickersDay-root": {
                                    color: "#fff"
                                },

                                "& .MuiPickersDay-root.Mui-selected": {
                                    backgroundColor: "#f97316",
                                    color: "#fff"
                                },

                                "& .MuiPickersDay-root:hover": {
                                    backgroundColor: "#333"
                                },

                                "& .MuiPickersCalendarHeader-label": {
                                    color: "#fff"
                                },

                                "& .MuiSvgIcon-root": {
                                    color: "#f97316"
                                },

                                "& .MuiDayCalendar-weekDayLabel": {
                                    color: "#aaa"
                                },

                                "& .MuiPickersDay-today": {
                                    border: "1px solid #f97316"
                                }
                            }}
                        />
                    </LocalizationProvider>
                )}
                {date && (
                    <article className="flex-col gap-3">
                        <header className="w-full flex flex-col gap-3 items-start justify-center">
                            <div className="w-full flex items-center justify-between gap-4">
                                <h1 className='text-white' >Você está agendado para: <br /> <span className="text-orange-500 font-medium capitalize"> {date.format('D [de] MMMM [de] YYYY')}</span></h1>
                                <button onClick={() => setDate(null)} className="p-2 capitalize text-sm  items-center justify-center text-center bg-orange-500 shadow-sm shadow-white text-white rounded-md">escolher outra data</button>
                            </div>
                            <h1 className="font-bold text-white">Horários disponíveis para essa data</h1>
                        </header>
                        <article className="aspect-video mt-3 overflow-y-auto">
                            <div className="w-full h-full rounded-lg">
                                {availableSlots.length === 0 ? (
                                    <div className="w-full p-2 flex-col gap-1 h-full flex items-center justify-center">
                                        <p className="font-medium text-md text-white">
                                            Nenhum horário disponivel
                                        </p>
                                        <p className="font-normal text-gray-500 text-xs text-center">
                                            No momento estamos sem horários disponiveis para essa data
                                        </p>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-4 p-2.5 gap-2 bg-[#181818] rounded-lg">
                                        {
                                            availableSlots.map((slot, i) => (
                                                <button
                                                    onClick={() => {
                                                        const selectedTime = slot;
                                                        if (!selectedTime || hours === slot) {
                                                            setHours(null);
                                                            return;
                                                        }
                                                        setHours(selectedTime);
                                                    }}
                                                    key={i}
                                                    className={`aspect-video items-center text-xs text-white justify-center border-[0.5px] rounded-md border-black flex ${hours === slot ? 'bg-orange-500 opacity-100 border-none text-white' : 'shadow-md shadow-black/20 opacity-70'}`}>
                                                    {slot}
                                                </button>
                                            ))
                                        }
                                    </div>
                                )}
                            </div>
                        </article>
                    </article>
                )}
                <button className='w-full h-fit py-3 hover:cursor-pointer font-medium text-white bg-orange-700 rounded-md'>Agendar Serviço</button>
            </form>
        </div>
    )
}
